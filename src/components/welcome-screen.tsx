import { BingReturnType } from '@/lib/hooks/use-bing'

const exampleMessages = [
  {
    heading: '🧐 Ask Complex Questions',
    message: `What can I cook for my picky kid who only eats orange foods?`
  },
  {
    heading: '🙌 Get Better Answers',
    message: 'What are the pros and cons of the top 3 best-selling pet vacuums?'
  },
  {
    heading: '🎨 Get Creative Inspiration',
    message: `Write a haiku in the voice of a pirate about a crocodile in outer space.`
  }
]

export function WelcomeScreen({ setInput }: Pick<BingReturnType, 'setInput'>) {
  return (
    <div className="welcome-container flex">
      {exampleMessages.map(example => (
        <button key={example.heading} className="welcome-item w-4/5 sm:w-[240px]" type="button" onClick={() => setInput(example.message)}>
          <div className="item-title">{example.heading}</div>
          <div className="item-content">
            <div className="item-body">
              <div className="item-header"></div>
              <div>&ldquo;{example.message}&rdquo;</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
