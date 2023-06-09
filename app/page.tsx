import { OnScroll } from '@/components/animations'
import { LE, LPE } from '@/components/entry'
import { Icon } from '@/components/icon'
import { PageTransition } from '@/components/page_transition'
import { ContentService } from '@/services/content'
import Link from 'next/link'

export default async function Home() {
  const homepage = await ContentService.homepage()
  return <>
    <PageTransition />
    <main role='main'>
      <div className='padded padded--big_top relative nooverflow'>
        <Icon i='anvil_homepage' />

        <h2
          data-parallax="2"
          className='max_width max_width--tight'>
          <OnScroll><LE c={homepage} k='description' /></OnScroll>
        </h2>
        <div className='big_bottom' />

        <div className='grid grid--thick_guttered grid--spaced_around grid--middle'>
          {homepage.fields.projects.map((project: any, index: number)=> <div key={project.fields.url}
            data-parallax={2 - (index % 3 === 0 ? 0.5 : index % 3 === 1 ? 1 : 0)}
            className={`col col--${homepage.fields.projectsGridSizes[index]}of12 col--tablet_portrait--12of12`}>
            <Link href={`/projets/${project.fields.url}`}>
              <OnScroll>
                <div className='small_bottom'><LPE c={project} k='hero' /></div>
                <h4>
                  <LE c={project} k='title' />
                </h4>
              </OnScroll>
            </Link>

            <div className='normal_bottom hide_on_tablet_portrait' />
          </div>)}
        </div>
        
      </div>
    </main>

    <div className='padded padded--thick overflow_top text_center teal_back' style={{ position: 'relative', zIndex: 1 }}>
      <OnScroll><Link href='/projets' className='big' style={{ zIndex: 1 }}><LE c={homepage} k='cta' /></Link></OnScroll>
    </div>
  </>
}
