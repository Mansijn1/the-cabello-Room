import React from 'react';

const milestones = [
  {
    year: '2002',
    description: (
      <>
        Originally trading as <em className="text-[#75603D]">Captive Hair Studio</em>, becoming part of the local Penrith community.
      </>
    )
  },
  {
    year: '2018',
    description: (
      <>
        Isabel Vella took ownership and founded <em className="text-[#75603D]">The Cabello Room</em>, transforming the space into the modern, welcoming salon it is known as today.
      </>
    )
  },
  {
    year: 'Sept 2026',
    description: (
      <>
        The salon entered its next chapter under the ownership of <strong className="font-medium text-[#75603D]">Celeste Borg</strong> — a full-circle moment after years of working closely with the team and clients.
      </>
    )
  }
];

export default function About() {
  return (
    <main className="relative isolate overflow-hidden bg-[url('/about-background.avif')] bg-cover bg-center bg-fixed text-[#29251F]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white/50" />

      <div className="relative z-0">
        <section className="px-6 pb-14 pt-32 text-center sm:pb-16 sm:pt-36">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#75603D]">
              A Penrith salon with heart
            </p>
            <h1 className="font-serif text-4xl font-medium leading-tight text-[#29251F] sm:text-5xl md:text-6xl">
              Who Are The Cabello Room?
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#494239] sm:text-lg">
              Nestled in the heart of Penrith, built around connection, education, and creating an experience where every client feels at home.
            </p>
            <div aria-hidden="true" className="mx-auto mt-8 h-px w-20 bg-[#8A7048]/70" />
          </div>
        </section>

        <section className="px-6 pb-16 sm:pb-20">
          <div className="mx-auto grid max-w-6xl items-start gap-10 rounded-2xl border border-[#8A7048]/25 bg-[#FFFCF7]/85 p-6 shadow-[0_18px_50px_rgba(54,42,27,0.12)] sm:p-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 lg:p-12">
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full border border-[#8A7048]/60" />
              <img
                src="/about-celeste.avif"
                alt="Celeste Borg, Director of The Cabello Room"
                className="relative aspect-[4/5] w-full border border-[#8A7048]/30 object-cover"
              />
            </div>

            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#75603D]">
                The next chapter
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-[#29251F] sm:text-4xl">
                Celeste Borg <span className="text-[#8A7048]">—</span> Director
              </h2>
              <div aria-hidden="true" className="my-6 h-px w-16 bg-[#8A7048]/70" />
              <p className="text-base leading-8 text-[#494239]">
                With a genuine love for the salon, its people and everything The Cabello Room represents, Celeste’s vision is to continue building on the foundations that have made Cabello so special while bringing a fresh energy into its future. Her focus is centred around creating beautiful, wearable and on-trend hair, continually educating and developing the team, and ensuring every client who walks through the doors feels heard, valued and genuinely cared for.
              </p>

              <div className="mt-9">
                <h3 className="mb-4 font-serif text-2xl font-medium text-[#29251F]">Our Evolution</h3>
                <ol className="grid gap-3 sm:grid-cols-3">
                  {milestones.map(({ year, description }) => (
                    <li key={year} className="rounded-xl border border-[#8A7048]/20 bg-white/75 p-4">
                      <h4 className="font-serif text-xl font-medium text-[#75603D]">{year}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#494239]">{description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:pb-24">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-[#8A7048]/25 bg-[#FFFCF7]/85 shadow-[0_18px_50px_rgba(54,42,27,0.12)] lg:grid-cols-[1fr_1.05fr]">
            <div className="relative min-h-[18rem] sm:min-h-[24rem]">
              <img
                src="/about-teams.avif"
                alt="The team at The Cabello Room"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#75603D]">
                Our people, our purpose
              </p>
              <h2 className="font-serif text-3xl font-medium text-[#29251F] sm:text-4xl">
                Our Philosophy
              </h2>
              <p className="mt-5 text-base leading-8 text-[#494239]">
                We believe great hair starts with connection. Our salon is built on education, honest and personalised advice, and creating an experience where every client feels heard, valued and at home.
              </p>
              <h3 className="mt-7 font-serif text-2xl font-medium text-[#29251F]">
                A team that grows together
              </h3>
              <p className="mt-3 text-base leading-8 text-[#494239]">
                The Cabello Room is home to a passionate and driven team of women who love transforming hair, continually learning and building long-lasting relationships that go far beyond an appointment. The next chapter is an evolution of everything our clients already know and love — with the same heart, the same warmth and an exciting future ahead.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
