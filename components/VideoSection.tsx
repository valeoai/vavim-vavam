import { getBasePath } from "@/utils/path"

interface VideoSectionProps {
  title: string
  videoSrc: string
  description?: string
}

export default function VideoSection({ title, videoSrc, description }: VideoSectionProps) {
  const fullVideoPath = `${getBasePath()}${videoSrc}`

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 font-montserrat">{title}</h2>
      {description && (
        <p className="text-gray-700 mb-4 whitespace-pre-line">{description}</p>
      )}
      <div className="bg-white p-6 rounded-lg">
        <video controls className="w-full">
          <source src={fullVideoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}