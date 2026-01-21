import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import {
  FiArrowUpRight,
  FiTrendingUp,
  FiLayers,
  FiBarChart2,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

/* ===== 3D DIGITAL MONOLITH ===== */
function DigitalMonolith() {
  useFrame((state) => {
    state.camera.position.z = 6;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
      <RoundedBox args={[1.6, 2.4, 0.4]} radius={0.15}>
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.5}
          roughness={0}
          ior={1.3}
          chromaticAberration={0.06}
          backside
        />
      </RoundedBox>
    </Float>
  );
}

export default function App() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* GLOBAL BACKGROUND SYSTEM */}
      <div className="soft-glow glow-cyan" />
      <div className="soft-glow glow-purple" />
      <div className="soft-glow glow-center" />
      <div className="noise-overlay" />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="badge">Horizon Lite • Cinematic Agency</span>

            <h1 className="headline">
              Light the <span>Future</span>
              <br /> of Your Brand
            </h1>

            <p className="subheadline">
              A next-generation social media agency combining cinematic content,
              data-driven strategy, and futuristic digital presence.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="btn-primary">
                Get Free Audit <FiArrowUpRight />
              </button>
              <button className="btn-outline">View Case Study</button>
            </div>
          </motion.div>

          <div className="relative h-[560px] w-full">
            {/* SOFT LIGHT BACKDROP */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-[140px]" />
              <div className="absolute w-[320px] h-[320px] rounded-full bg-purple-500/20 blur-[160px]" />
            </div>

            {/* HOLOGRAPHIC GRID */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            {/* FLOATING STATS / UI */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-10 left-10 glass-card w-48"
            >
              <p className="text-xs text-white/60">Avg. Engagement</p>
              <p className="text-2xl font-semibold text-cyan-400">+320%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-16 right-12 glass-card w-52"
            >
              <p className="text-xs text-white/60">Monthly Reach</p>
              <p className="text-2xl font-semibold text-purple-400">1.2M+</p>
            </motion.div>

            {/* 3D CANVAS (FOCUS OBJECT) */}
            <div className="relative z-10 h-full">
              <Canvas>
                <ambientLight intensity={1.6} />
                <directionalLight position={[6, 6, 6]} intensity={1.5} />
                <DigitalMonolith />
              </Canvas>
            </div>
          </div>

        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="section text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          A New Standard for Digital Presence
        </motion.h2>

        <p className="subheadline max-w-3xl mx-auto">
          We don’t chase trends. We engineer long-term visibility, consistency,
          and trust for brands ready to scale.
        </p>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section">
        <h2 className="section-title">Our Core Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {[
            {
              icon: <FiLayers />,
              title: "Social Media Management",
              desc: "Planning, scheduling, daily posting & growth optimization.",
            },
            {
              icon: <FiZap />,
              title: "Content Creation",
              desc: "High-impact reels, premium feed design & storytelling.",
            },
            {
              icon: <FiTrendingUp />,
              title: "Brand Strategy",
              desc: "Tone of voice, positioning & visual consistency.",
            },
            {
              icon: <FiBarChart2 />,
              title: "Analytics & Reporting",
              desc: "Insight-driven reports and continuous optimization.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.03 }}
              className="glass-card neon-hover"
            >
              <div className="icon-box">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WORKFLOW TIMELINE ===== */}
      <section className="section relative">
        <h2 className="section-title">Our Workflow</h2>

        <div className="grid lg:grid-cols-4 gap-12 mt-24">
          {[
            "Audit & Research",
            "Strategy & Direction",
            "Execution & Publishing",
            "Analyze & Scale",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="workflow-card"
            >
              <span className="step-index">0{i + 1}</span>
              <h4>{step}</h4>
              <p>
                Each step is structured to ensure measurable growth and brand
                consistency.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED CASE ===== */}
      <section className="relative h-[80vh] my-40">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center text-center">
          <h2 className="headline">
            From Invisible to
            <br />
            <span>Unignorable</span>
          </h2>
          <p className="subheadline mt-6">
            One of our clients achieved +320% engagement growth in 90 days using
            our cinematic content system.
          </p>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section">
        <h2 className="section-title">Why Horizon Lite</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {[
            "Cinematic-grade content quality",
            "Strategy backed by real analytics",
            "Consistency that builds trust",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-card"
            >
              <FiCheckCircle className="text-cyan-400 text-2xl mb-4" />
              <p className="card-desc">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section text-center">
        <h2 className="section-title">Let’s Build Your Digital Horizon</h2>
        <p className="subheadline max-w-2xl mx-auto">
          Ready to elevate your brand with cinematic execution and strategy?
        </p>
        <button className="btn-primary mt-12">
          Consult Now <FiArrowUpRight />
        </button>
      </section>
    </div>
  );
}
