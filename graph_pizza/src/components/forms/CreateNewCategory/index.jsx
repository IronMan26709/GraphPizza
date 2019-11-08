import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../renderField';
import  Button  from '../../Button/Button';
 



const CreateNewCAtegoryForm = props =>{
    const{ handleSubmit } = props;
    return(
        <div className="create_new_category_wrap">
             <form onSubmit={handleSubmit}>
                <Field
                    name="name"
                    component={renderField}
                    placeholder="Название категории"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="id"
                    component={renderField}
                    placeholder="Id категории"
                    // className="signup-input"
                    type="text"
                />
                <Field
                    name="idGood"
                    component={renderField}
                    placeholder="Id товара"
                    // className="signup-input"
                    type="text"
                />
                <Button text="Создать новую категорию"/>
             </form>
        </div>
    )
}


export default reduxForm({form: "CreateNewCategory",})(CreateNewCAtegoryForm)