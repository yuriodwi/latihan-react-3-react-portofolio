/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { LineGradient } from "../components";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// const Project bertujuan untuk mengonvert dari tittle
// tittle = "Project 1"
// convert = "Project-1"
const Project = ({ tittle, subtittle }) => {
  const overlyStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration:500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTittle = tittle.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlyStyles}>
        <p className="text-2xl font-playfair">{tittle}</p>
        <p className="mt-7">{subtittle}</p>
      </div>
      <img src={`../assets/${projectTittle}.jpeg`} alt={projectTittle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam
          laudantium, quasi at odit voluptas tenetur obcaecati explicabo dolorem
          nostrum neque in eaque, veritatis dolor esse deleniti. Perspiciatis
          nostrum non maxime accusamus blanditiis, officiis mollitia.
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            tittle="Project 1"
            subtittle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, explicabo?"
          />
          <Project
            tittle="Project 2"
            subtittle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat blanditiis impedit voluptate sed consectetur repudiandae, sapiente nisi neque officiis beatae. Odit enim laboriosam culpa!"
          />

          {/* ROW 2 */}
          <Project
            tittle="Project 3"
            subtittle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <Project
            tittle="Project 4"
            subtittle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, natus? Dignissimos molestiae nostrum nemo recusandae exercitationem tenetur nisi."
          />
          <Project
            tittle="Project 5"
            subtittle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at dolores nobis debitis. Fugit, nulla laboriosam iure assumenda velit quae quisquam reprehenderit repudiandae incidunt, dolore consequuntur error inventore. Exercitationem tenetur temporibus recusandae amet."
          />

          {/* ROW 3 */}
          <Project
            tittle="Project 6"
            subtittle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id consectetur omnis."
          />
          <Project
            tittle="Project 7"
            subtittle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis?"
          />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
