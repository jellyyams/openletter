import React from 'react'
import { useState } from 'react'
import { Form } from '../bootstrap'
import styles from './TagsInput.module.css'

export default function TagsInput() {
    const [tags, setTags] = useState(['Group 1'])

    const removeTag = (index: any) => {
        console.log(index)
        setTags(tags.filter((el, i) => i != index))
    }

    const handleKeyDown = (e: any) => {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
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
            {/* <Form.Control onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Type something" />  */}
        </div>
    )
}
