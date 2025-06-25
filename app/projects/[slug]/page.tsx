import { notFound } from 'next/navigation'; // To handle invalid slugs
import { projs } from '../../../data/projects';
import Link from 'next/link';
import IMG from './image';

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
    <div className={`flex max-[630px]:flex-col gap-2 justify-between`}>
      <div className='max-[630px]:flex hidden flex-col relative gap-3'>
        <div className='inf flex flex-col gap-1 p-6 bg-[var(--cement)] text-[var(--carbon)]'>
          <div className='flex mb-5 gap-2 justify-between items-center'>
            <div>{project.name}</div>
            <div className='mr-4'>{projs.findIndex((p) => p.slug === slug) + 1} / {projs.length}</div>
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
        <Link href={'/'} className='sticky top-3 border hover:bg-[var(--hover)] w-1/2 p-2 text-[var(--clay)]'>
          Back
        </Link>
      </div>
      {project.images ? (
        <div className={`w-1/2 flex ${project?.device === "phone" ? "imgGrid" : "flex-col"} gap-[10px]`}>
          {project?.images?.map((image, index) => (
            <IMG
              key={index}
              src={image}
              name={project.name}
              index={index}
            />
          ))}
        </div>
      ) : null}
      <div className='w-1/2 max-[630px]:hidden flex flex-col relative gap-3'>
        <div className='inf flex flex-col gap-1 p-6 bg-[var(--cement)] text-[var(--carbon)]'>
          <div className='flex mb-5 text-[16px] gap-2 justify-between items-center'>
            <div>{project.name}</div>
            <div className='mr-4'>{projs.findIndex((p) => p.slug === slug) + 1} / {projs.length}</div>
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
        <Link href={'/'} className='sticky top-3 border hover:bg-[var(--hover)] w-1/2 p-2 text-[var(--clay)]'>
          Back
        </Link>
      </div>
      {project.images ? null : (
        <pre id="keeb" className="font-depMon w-1/2 absolute right-0">
          {`
                  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬───────────┐
                  │ esc │ f1  │ f2  │ f3  │ f4  │ f5  │ f6  │ f7  │ f8  │ f9  │ f10 │ f11 │ f12 │ power     │
                  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼───────────┤
                  │  ~  │  !  │  @  │  #  │  $  │  %  │  ^  │  &  │  *  │  (  │  )  │  _  │  +  │           │
                  │     │  1  │  2  │  3  │  4  │  5  │  6  │  7  │  8  │  9  │  0  │  —  │  =  │ delete    │
                  ├─────┴─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┬─────┤
                  │           │     │     │     │     │     │     │     │     │     │     │  {  │  }  │  |  │
                  │ tab       │  Q  │  W  │  E  │  R  │  T  │  Y  │  U  │  I  │  O  │  P  │  [  │  ]  │  \\  │
                  ├───────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┴─────┤
                  │           │     │     │     │     │     │     │     │     │     │  :  │  “  │           │
                  │ caps lock │  A  │  S  │  D  │  F  │  G  │  H  │  J  │  K  │  L  │  ;  │  '  │ enter     │
                  ├───────────┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴───────────┤
                  │              │     │     │     │     │     │     │     │  <  │  >  │  ?  │              │
                  │ shift        │  Z  │  X  │  C  │  V  │  B  │  N  │  M  │  ,  │  .  │  /  │ shift        │
                  ├─────┬──────┬─┴───┬─┴───┬─┴─────┴─────┴─────┴─────┴─────┼─────┼─────┼─────┴┬──────┬──────┤
                  │     │      │     │     │                               │     │     ├──────┼──────┼──────┤
                  │ fn  │ ctrl │ opt │ cmd │           s p a c e           │ cmd │ opt ├──────┼──────┼──────┤
                  └─────┴──────┴─────┴─────┴───────────────────────────────┴─────┴─────┴──────┴──────┴──────┘
                  `}

        </pre>
      )}
    </div >
  )
}
