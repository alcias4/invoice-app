




interface Props {
  text: string
}


const Btn: React.FC<Props> = ({text}) => {
  return (
    <button className="w-full bg-gradient-to-r text-white from-sky-500 to-indigo-500 p-2 rounded-lg">
      {text}
    </button>
  )
}

export default Btn;