'use client'
import { MODELS } from "../model";

type ChatModelSelectProps = {
    value: keyof typeof MODELS,
    onChange: (value: keyof typeof MODELS) => void,
}

const ChatModelSelect = ({ value, onChange }: ChatModelSelectProps) => {
    return <select value={value} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value as keyof typeof MODELS)}>
        {Object.keys(MODELS).map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
    </select>
}

export default ChatModelSelect;