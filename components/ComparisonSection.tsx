import { getBasePath } from "@/utils/path"

interface Video {
  title: string
  src: string
}

interface VideoGroup {
  subtitle?: string
  videos: Video[]
}

interface ComparisonSectionProps {
  title: string
  groups: VideoGroup[]
}

export default function ComparisonSection({ title, groups }: ComparisonSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 font-montserrat">{title}</h2>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-6">
          {group.subtitle && (
            <h3 className="text-lg sm:text-xl font-semibold mb-3 font-montserrat">{group.subtitle}</h3>
          )}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {group.videos.map((video, videoIndex) => (
              <div key={videoIndex} className="bg-white p-4 sm:p-6 rounded-lg">
                <h4 className="text-base sm:text-lg font-bold mb-2 font-montserrat">{video.title}</h4>
                <video controls className="w-full">
                  <source src={`${getBasePath()}${video.src}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

