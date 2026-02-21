import ScrollAnimation from "../components/ScrollAnimation";
import ProgressBar from "../components/ProgressBar";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

// প্রোজেক্ট আইটেমের টাইপ
interface ProjectItem {
  title: string;
  progress: string;
  desc: string;
}

const Projects: React.FC = () => {
  const { t, lang } = useLanguage();

  const projects: ProjectItem[] = [
    {
      title: t("projects.study.title"),
      progress: "44%",
      desc: t("projects.study.desc"),
    },
    {
      title: t("projects.quran.title"),
      progress: "0%",
      desc: t("projects.quran.desc"),
    },
    {
      title: t("projects.english.title"),
      progress: "0%",
      desc: t("projects.english.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-16 px-4">
      <Helmet>
        {lang === "bn" ? (
          <>
            <title>কাফআহ প্রকল্পসমূহ | কুরআন ও ইংলিশ লার্নিং অ্যাপ</title>
            <meta
              name="description"
              content="কাফআহর চলমান প্রকল্প: কুরআন লার্নিং অ্যাপ ও ইংলিশ লার্নিং অ্যাপ। ডয়োসফট-এর সহযোগিতায় তৈরি হচ্ছে ইনশাআল্লাহ।"
            />
            <meta property="og:title" content="কাফআহ প্রকল্পসমূহ" />
            <meta
              property="og:description"
              content="কুরআন লার্নিং অ্যাপ ও ইংলিশ লার্নিং অ্যাপ - ডয়োসফট-এর সহযোগিতায়।"
            />
          </>
        ) : (
          <>
            <title>Kafa'ah Projects | Quran & English Learning Apps</title>
            <meta
              name="description"
              content="Kafa'ah's ongoing projects: Quran Learning App and English Learning App, in collaboration with Doyosoft, InshaAllah."
            />
            <meta property="og:title" content="Kafa'ah Projects" />
            <meta
              property="og:description"
              content="Quran Learning App and English Learning App - in collaboration with Doyosoft."
            />
          </>
        )}
        <meta
          property="og:url"
          content="https://kafaahbd.github.io/kafaahbd/projects"
        />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Projects
        </h1>
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ScrollAnimation key={idx}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-blue-400">
                  {project.title}
                </h2>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.progress}
                    </span>
                  </div>
                  <ProgressBar progress={project.progress} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {project.desc}
                </p>
              </div>
            </ScrollAnimation>
          ))}
          <ScrollAnimation>
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl text-center">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t("projects.more")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Projects;