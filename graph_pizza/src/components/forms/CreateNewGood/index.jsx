import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../renderField';
import { renderTextArea } from '../../renderTextArea/renderTextArea';
import  Button  from '../../Button/Button';
 



const CreateNewGoodForm = props =>{
    const{ handleSubmit } = props;
    return(
        <div className="create_new_good_wrap">
             <form onSubmit={handleSubmit}>
                <Field
                    name="name"
                    component={renderField}
                    placeholder="Название товара"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="id"
                    component={renderField}
                    placeholder="ID товара"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="price"
                    component={renderField}
                    placeholder="Стоимость товара"
                    // className="signup-input"
                    type="number"
                />
                 <Field
                    name="description"
                    component={renderTextArea}
                    placeholder="Описание"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="images"
                    component={renderField}
                    placeholder="Id фото"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="categories"
                    component={renderField}
                    placeholder=" Id категории товара"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="textOfPhoto"
                    component={renderField}
                    placeholder="Текст к фото"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="IdCategory"
                    component={renderField}
                    placeholder="ID категории"
                    // className="signup-input"
                    type="text"
                />
                <Button text="Создать новый товар"/>
             </form>
        </div>
    )
}


export default reduxForm({form: "CreateNewGood",})(CreateNewGoodForm)