



interface Props {
  text: string
}




const Title: React.FC<Props> = ({text}) => {
  return (
    <h2 className={`text-center font-bold text-3xl dark:title bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent`}>
      {text}
    </h2>
  )
}

export default Title;