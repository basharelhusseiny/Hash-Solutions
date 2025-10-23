import { motion } from "framer-motion";

const OurStory = ({ itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="mb-24">
      <div className="bg-gradient-to-br from-purple-950/30 via-black/40 to-pink-950/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12 max-w-4xl mx-auto relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
        <h2 className="text-4xl font-bold text-white mb-10 inline-block relative">
          Our Story
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3" />
        </h2>
        <div className="space-y-8 md:text-xl text-purple-100/90 relative z-10 leading-relaxed">
          <p className="leading-relaxed">
            Founded in 2018 in Khartoum, Sudan, and proudly expanded to Juba,
            South Sudan in 2023—where we now call home— HASH SOLUTIONS is a
            creative marketing and business development company dedicated to
            driving business growth across the region. With a talented,
            results-driven team, we deliver advanced marketing solutions and
            strategic consulting tailored to the unique needs of organizations
            in Sudan, Juba, South Sudan and the region. Our expertise spans
            brand identity, digital marketing, media production, and business
            consulting, making us the trusted partner for companies seeking
            innovative, measurable results. We combine local insight with
            forward-thinking creativity to help our clients achieve sustainable
            success in today's dynamic markets.
          </p>
          <p className="leading-relaxed">
            We bring regional experience and local execution to every
            engagement.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;
