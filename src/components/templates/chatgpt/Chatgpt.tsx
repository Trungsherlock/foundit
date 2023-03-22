import React, {useRef, useState, useCallback, FC, useEffect} from 'react';
import styles from "./Chatgpt.module.sass";
import { Icon } from "../../modules/icon";
import cn from "classnames";
import { ChangeStringToArray } from 'utils/ChangeStringToArray';
import { TWeb } from 'types/WebData';
import Link from 'next/link';

interface Conversation {
  role: string
  content: string
}

const Chatgpt: FC = () => {
  const [value, setValue] = useState<string>("")
  const [conversation, setConversation] = useState<Conversation[]>([])
  const [result, setResult] = useState<TWeb[] | string>([])
  const [loading, setLoading] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }, []
  )

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLoading(true)
      let v = value + '. Return 3 results in JSON with this format without counting number: [{"name": "Google", "url": "https://www.google.com/", "about": "Google is a search engine that started development in 1996 to find files on the Internet."}, {"name": "Google", "url": "https://www.google.com/", "about": "Google is a search engine that started development in 1996 to find files on the Internet."}]'
      const chatHistory = [...conversation, {role: "user", content: v}]
      const response = await fetch("/api/openAIChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({messages: chatHistory}),
      })

      const data = await response.json()
      setValue("")
      setConversation([
        ...chatHistory, 
        {role: "assistant", content: data.result.choices[0].message.content},
      ])
      setResult(ChangeStringToArray(data.result.choices[0].message.content))
      console.log(ChangeStringToArray(data.result.choices[0].message.content))
    }
  }



  //{"name": "Google", "url": "https://www.google.com/", "image": "https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1", "about": "Google is a search engine that started development in 1996 by Sergey Brin and Larry Page as a research project at Stanford University to find files on the Internet."}

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true)
    let v =  value + '. Return 3 results in JSON with this format without counting number: [{"name": "Google", "url": "https://www.google.com/", "about": "Google is a search engine that started development in 1996 to find files on the Internet."}, {"name": "Google", "url": "https://www.google.com/", "about": "Google is a search engine that started development in 1996 to find files on the Internet."}]'
      const chatHistory = [...conversation, {role: "user", content: v}]
      const response = await fetch("/api/openAIChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({messages: chatHistory}),
      })

      const data = await response.json()
      setValue("")
      setConversation([
        ...chatHistory, 
        {role: "assistant", content: data.result.choices[0].message.content},
      ])
      setResult(ChangeStringToArray(data.result.choices[0].message.content))
  }

  const handleRefresh = () => {
    inputRef.current?.focus()
    setValue("")
    setConversation([])
    setResult([])
    setLoading(false)
  }

  useEffect(() => {
    setLoading(false)
  }, [result])

  return (
    <div>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className = {styles.title2}>Please type your prompt with "what is/are the website/s for"</div>
          <div className={styles.search}>
            <input
              className={styles.input}
              type="text"
              value={value}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              name="search"
              placeholder="eg: what are websites for online shopping"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </div>
          <div className = {styles.buttonset}>
            <button onClick={handleSubmit} className={styles.reset}>
              <p>Find</p>
              <Icon name="check" size="12" />
            </button>
            <button onClick={handleRefresh} className={styles.reset}>
              <p>Start New Search</p>
              <Icon name="close" size="12" />
            </button>
          </div>
          <div className={styles.results}>
            {
              loading ? 
                <div>Loading...</div>
              : 
                Array.isArray(result) ?
                result.map((item, index) => (
                  <Link style={{ textDecoration: 'none' }} href={item.url} key = {index} target="_blank">
                  <div className={styles.frame}>
                    <div className={styles.avatar}>
                      <img 
                      src='/images/content/activity-pic-2.jpg'
                      alt="Avatar" />
                    </div> 
                    <div className={styles.title}>{item.name}</div>
                    <div className={styles.textFrame}>
                      <div className={styles.text}>
                        {item.about}
                      </div>
                    </div>
                  </div>
                  </Link>
                ))
                : result
            }
            {/* <div className={styles.frame}>
              <div className={styles.avatar}>
                <img 
                src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" 
                alt="Avatar" />
              </div> 
              <div className={styles.title}>Google</div>
              <div className={styles.textFrame}>
                <div className={styles.text}>
                Google is a search engine that started development in 1996 by Sergey Brin and Larry Page as a research project at Stanford University to find files on the Internet
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatgpt;