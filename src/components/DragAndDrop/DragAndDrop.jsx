import React from 'react'
import { Button, Upload } from 'antd'
export const DragAndDrop = () => {
  return (
    <div className='flex justify-center w-full'>
        <Upload.Dragger
         multiple 
         listType='picture'
         action={"http://localhost:3000}"}
         showUploadList={{ showRemoveIcon: true}}
         beforeUpload={(file)=>{
            console.log({file});
            return false;
         }}
         className='w-full'
         
         >
            <Button>Зураг хавсаргах</Button>
        </Upload.Dragger>
    </div>
  )
}
