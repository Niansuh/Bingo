import React, { useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { BingReturnType } from '@/lib/hooks/use-bing'
import VoiceIcon from '@/assets/images/voice.svg'
import VoiceButton from './ui/voice'
import { SR } from '@/lib/bots/bing/sr'
import { voiceListenAtom } from '@/state'
import { SVG } from './ui/svg'
import { cn } from '@/lib/utils'

const sr = new SR(['Send', 'Clear', 'Quit'])

const Voice = ({ setInput, input, sendMessage, isSpeaking, className }: Pick<BingReturnType, 'setInput' | 'sendMessage' | 'input' | 'isSpeaking'> & { className?: string }) => {
  const setListen = useSetAtom(voiceListenAtom)
  useEffect(() => {
    if (sr.listening) return
    sr.transcript = !isSpeaking
  }, [isSpeaking])

  useEffect(() => {
    setListen(sr.listening)
  }, [sr.listening, setListen])

  useEffect(() => {
    sr.onchange = (msg: string, command?: string) => {
      switch (command) {
        case 'Quit':
          sr.stop()
          break;
        case 'Send':
          sendMessage(input)
        case 'Clear':
          setInput('')
          break;
        default:
          setInput(input + msg)
      }
    }
  }, [input, setInput, sendMessage])

  const switchSR = (enable: boolean = false) => {
    setListen(enable)
    if (enable) {
      sr.start()
    } else {
      sr.stop()
    }
  }

  return (
    <div className={cn('voice-container -mt-2 -mr-2', className)}>
      {
        sr.listening ? (
          <VoiceButton className="voice-button-theme" onClick={() => switchSR(false)} />
        ) : (
          <SVG className="cursor-pointer" alt="start voice" src={VoiceIcon} width={20} height={20} onClick={() => switchSR(true)} />
        )
      }
    </div>
  )
};

export default Voice;
