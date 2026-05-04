import { Mail,  MessageCircle, Activity } from "lucide-react";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5567991619198" },
  { icon: Activity, label: "LinkedIn", href: "https://www.linkedin.com/in/césar-danilo-396408153" },
  { icon: Mail, label: "Email", href: "mailto:cesardanilopalacios390@gmail.com" },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="absolute inset-0 -z-10 bg-primary/10 blur-[120px] rounded-full" />
        <p className="font-mono text-sm text-primary mb-3">// contato</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Vamos tirar sua ideia <span className="text-gradient">do papel</span>.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Conta pra mim o que você precisa. Respondo em até 24h com uma proposta clara.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          {channels.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg glass border border-border hover:border-primary/60 hover:-translate-y-0.5 transition-all font-medium"
            >
              <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
