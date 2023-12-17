// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allScams, Scam } from 'contentlayer/generated'
import { Fragment } from 'react'
function GithubIcon(){
    return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.2 12.2 0 00-6.2 0C7.1 1.9 6 2.2 6 2.2a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 005.6 9c0 4.7 2.8 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>
    </svg>
    )
}

function LinkIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" />
        </svg>
    )
}

function PostCard(post: Scam) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <a href={post.reference} className="link link-info flex flex-row">
          {post.title}<LinkIcon/>
        </a>
      </h2>
      {/* <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time> */}
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

function Header() {
    return (
        <>
            <header className="text-center text-sm container mx-auto pt-8 flex flex-row justify-start gap-x-6">
                <TitleText/>
            </header>
            <span className='divider mx-12' />
        </>
    )
}

function Footer() {
    return (
        <>
            <div className='divider mx-12'/>
            <footer className="text-sm container mx-auto pt-4 px-8 flex flex-col md:flex-row justify-start gap-x-6">
                <p>
                Built By{' '}<a href="https://limpan.dev/" className="link link-primary">Limpan</a>{' '}
                .
                </p>
                {/* Github icon */}
                <div>

                    <a href='https://github.com/linus-jansson/common-steam-scams' className=' hover:text-primary'>
                        <GithubIcon/>
                    </a>

                </div>
                {/* <p>Support me{' '}<a className='link link-primary' href="https://limpan.dev">here</a>{''}!</p> */}
            </footer>
        </>
    )
}

function TitleText() {
    return (
        <div className='max-w-sm'>
            <h1 className="text-center text-5xl font-black mb-4">Common Steam <br></br> Scams<span aria-hidden="true"><sup>(css)</sup></span></h1>
            <p>Have someone contacted you? It may be a scam if it matches any of these cases:</p>
        </div>
    )
}

export default function Home() {
  const scams = allScams.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
        <Header/>
        <main className="mx-auto px-8 md:container py-8">

            <section className='grid md:grid-cols-2 gap-12'>

                {/* {scams.map((scam: Scam) => (
                    <PostCard key={scam._id} {...scam} />
                ))} */}

                <div>
                    <p>Is something missing from this list?{' '}</p>
                    <p>Contact me{' '}<a href="mailto:steamscams@limpan.dev" className='link link-primary'>Here!</a></p>
                </div>
            </section>


            {/* <section> */}
                {/* <h1 className="text-3xl font-black my-5">Check out a Url, discord account or steam account:</h1> */}
                {/* Search to see if person or website is reported suspicous/scammer */}
                {/* <input type="text"
                    placeholder="Type in Discord username, steam ID or website.."
                    className="input input-bordered max-w-lg input-primary w-full duration-200" /> */}
            {/* </section> */}

        </main>
        <Footer/>
    </>
  )
}