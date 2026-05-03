type SearchBarProps = {
  id: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label: string
}

export function SearchBar({
  id,
  value,
  onChange,
  placeholder = 'חיפוש במילון…',
  label,
}: SearchBarProps) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        className="search"
        type="search"
        inputMode="search"
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
