import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange?: (value: RatingValueType)=> void
}

export function UncontrolledRating(props: RatingPropsType) {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} value={2} setValue={() =>{setValue(1)}} onChange= { () => props.onChange}  />
            <button onClick={() => {
                setValue(1)
            }}>1
            </button>
            <Star selected={value > 1} value={2} setValue={()=> {}}/>
            <button onClick={() => {
                setValue(2)
            }}>2
            </button>
            <Star selected={value > 2} value={2} setValue={()=> {}}/>
            <button onClick={() => {
                setValue(3)
            }}>3
            </button>
            <Star selected={value > 3} value={2} setValue={()=> {}}/>
            <button onClick={() => {
                setValue(4)
            }}>4
            </button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    onChange?: (value: RatingValueType)=> void
}

export function Star(props: StarPropsType) {
    // if (props.selected === true) {
    //     return <span><b>start</b></span>
    // } else {
    //     return <span>start</span>
    // }

    return(<span onClick={() => {
        props.setValue(props.value)
    }}>
    {props.selected ? <b>star</b> : 'star'}
    </span>)
}