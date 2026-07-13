import VoiceAssistant from "@/components/VoiceAssistant";

export default function AsistanPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-16">
      <div className="mb-10 w-full max-w-lg text-center">
        <h1 className="font-heading text-3xl font-semibold text-navy">Ela ile konuşun</h1>
        <p className="mt-2 text-muted-foreground">
          Otel rezervasyon talebinizi sesli olarak iletin, ekibimiz sizinle iletişime geçsin.
        </p>
      </div>
      <VoiceAssistant />
    </div>
  );
}
