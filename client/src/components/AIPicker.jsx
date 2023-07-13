import CustumButtom from './CustomButton';



const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='Chiedi AI...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustumButtom 
            type='outline'
            title= 'Chiedendo AI...'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustumButtom 
              type='outline'
              title= 'AI logo'
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />
            <CustumButtom 
              type='filled'
              title= 'AI Full'
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs'
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker