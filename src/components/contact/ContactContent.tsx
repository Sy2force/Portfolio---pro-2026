
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle, Upload, Briefcase, Users, Code, HelpCircle, MessageSquare } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  type: z.enum(["recruitment", "collaboration", "freelance", "other"]),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  file: z.any().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactTypeOptions = [
  { value: "recruitment", icon: Briefcase },
  { value: "collaboration", icon: Users },
  { value: "freelance", icon: Code },
  { value: "other", icon: HelpCircle },
] as const;

export default function ContactContent() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: "collaboration",
    },
  });

  const selectedType = watch("type");
  const [fileName, setFileName] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setValue("file", file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
      setValue("file", file);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("type", data.type);
      formData.append("company", data.company || "");
      formData.append("message", data.message);
      if (data.file) {
        formData.append("attachment", data.file);
      }

      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "PLACEHOLDER_ID"}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setFileName(null);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Réponse sous 24h
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t("contact.info.email")}
                </h3>
                <a
                  href="mailto:shay.acoca@email.com"
                  className="text-violet-600 dark:text-violet-400 hover:underline"
                >
                  shay.acoca@email.com
                </a>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t("contact.info.location")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("contact.info.country")}
                </p>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-violet-100 dark:border-violet-800">
                <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {t("contact.info.availability")}
                </h3>
                <p className="text-violet-600 dark:text-violet-400 font-medium">
                  {t("contact.info.availableNow")}
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-48 flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tel Aviv, Israël
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
            >
              {/* Contact Type Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t("contact.form.type")}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {contactTypeOptions.map(({ value, icon: Icon }) => (
                    <label
                      key={value}
                      className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedType === value
                          ? "border-violet-600 bg-violet-50 dark:bg-violet-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                      <input
                        type="radio"
                        value={value}
                        {...register("type")}
                        className="sr-only"
                      />
                      <Icon
                        className={`w-6 h-6 mb-2 ${
                          selectedType === value
                            ? "text-violet-600 dark:text-violet-400"
                            : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          selectedType === value
                            ? "text-violet-600 dark:text-violet-400"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {t(`contact.form.types.${value}`)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("contact.form.name")} *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: "#8b5cf6" }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 dark:border-gray-700 focus:ring-violet-500"
                    } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("contact.form.email")} *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, borderColor: "#8b5cf6" }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 dark:border-gray-700 focus:ring-violet-500"
                    } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("contact.form.company")}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#8b5cf6" }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  {...register("company")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                  placeholder="Votre entreprise"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("contact.form.message")} *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "#8b5cf6" }}
                  transition={{ duration: 0.2 }}
                  {...register("message")}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 dark:border-gray-700 focus:ring-violet-500"
                  } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none`}
                  placeholder={t(`contact.form.placeholders.${selectedType}`) || t("contact.form.placeholders.default")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* File Upload */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t("contact.form.file")}
                </label>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="relative border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:border-violet-400 transition-colors cursor-pointer group"
                >
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                  />
                  <Upload className={`w-8 h-8 mx-auto mb-2 ${fileName ? "text-violet-600" : "text-gray-400 group-hover:text-violet-400"}`} />
                  {fileName ? (
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                      {fileName}
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t("contact.form.filePlaceholder")}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {t("contact.form.fileTypes")}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                <Send className="w-5 h-5" />
                {t("contact.form.submit")}
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3 text-green-700 dark:text-green-400"
                >
                  <CheckCircle className="w-5 h-5" />
                  {t("contact.form.success")}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  {t("contact.form.error")}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
