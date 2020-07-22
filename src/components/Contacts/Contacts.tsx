import React from 'react'

const Contacts = (props: any) => {
  const onClickButton = () => {
    props.history.push('/')
  }

  return (
    <div>
      <div className="font-light text-center m-10 text-4xl">+7 XXX XXXXXXX</div>
      <button
        className="bg-blue-500 hover:bg-blue-600 rounded px-4 flex justify-center text-white mx-auto"
        onClick={onClickButton}
      >
        На главную
      </button>
    </div>
  )
}

export { Contacts }
