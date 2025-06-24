import { notFound } from 'next/navigation'; // To handle invalid slugs
import { projs } from '../../../data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const project = projs.find((p) => p.slug === slug)

  if (!project) {
    notFound();
  }

  return (
    <div className={`flex gap-2 justify-between`}>
      {project.images ? (
        <div className={`w-1/2 flex ${project?.device === "phone" ? "imgGrid" : "flex-col"} gap-[10px]`}>
          {project?.images?.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.name} image ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="object-cover"
            />
          ))}
        </div>
      ) : null}
      <div className='w-1/2 flex flex-col relative gap-3'>
        <div className='inf flex flex-col gap-1 p-6 bg-[var(--cement)] text-[var(--carbon)]'>
          <div className='flex mb-5 text-[17px] gap-2 justify-between items-center'>
            <div>{project.name}</div>
            <div className='mr-8 text-sm'>{projs.findIndex((p) => p.slug === slug) + 1} / {projs.length}</div>
          </div>
          <div className='flex justify-between items-center'>
            {project.role ? (
              <div className='flex flex-col gap-1'>
                <div className='uppercase'>## Role</div>
                {project.role}
              </div>
            ) : null}
            {project.emp_type ? (
              <div className='flex flex-col gap-1 pr-8'>
                <div className='uppercase'>## employment type</div>
                {project.emp_type}
              </div>
            ) : null}
          </div>
          {project.dur ? (
            <div className='flex flex-col gap-1'>
              <div className='uppercase mt-3'>## Duration</div>
              {project.dur}
            </div>
          ) : null}
          {project.tech_stack ? (
            <div className='flex flex-col gap-1'>
              <div className='uppercase mt-3'>## Tech stack</div>
              {project.tech_stack}
            </div>
          ) : null}
          <div className='my-5'>---</div>
          {project.description ? (
            <div className='flex flex-col gap-1'>
              <div className='uppercase'>## About</div>
              {project.description}
            </div>
          ) : null}
        </div>
        <Link href={'/'} className='sticky top-3 border hover:bg-green-600/20 w-1/2 p-2 text-[var(--clay)]'>
          Back
        </Link>
      </div>
    </div >
  )
}
