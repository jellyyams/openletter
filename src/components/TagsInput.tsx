import React from 'react'
import { useState } from 'react'
import styles from './TagsInput.module.css'

export default function TagsInput() {
    const [tags, setTags] = useState(['Group 1'])

    const removeTag = (index: number) => {
        console.log(index)
        setTags(tags.filter((el, i) => i != index))
    }

    const handleKeyDown = (event: any) => {
        if (event.key !== 'Enter') return
        const value = event.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        event.target.value = ''
    }

    return (
        <div className={styles.tagsinputcontainer}>
            {tags.map((tag, index) => (
                <div className={styles.tagitem} key={index}>
                    <span className="text">{tag}</span>
                    <span
                        className={styles.close}
                        onClick={() => removeTag(index)}
                    >
                        &times;
                    </span>
                </div>
            ))}
            <input
                onKeyDown={handleKeyDown}
                type="text"
                className={styles.tagsinput}
                placeholder="Type here"
            ></input>
        </div>
    )
}
