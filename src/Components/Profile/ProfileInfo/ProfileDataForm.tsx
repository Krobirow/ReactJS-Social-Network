import React, { FC } from 'react';
import s from './profileInfo.module.css';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { ProfileFormType, ProfileTypeDataEl } from '../../../redux/types';

const ProfileDataForm: FC<InjectedFormProps<ProfileFormType, ProfileFormOwnPropsType> & ProfileFormOwnPropsType> = ({handleSubmit, error, profile}) => {
	return (
		<form onSubmit={handleSubmit} action='' className={s.profileDataForm}>
			<div><button type={'submit'}>Save</button></div>
			{ error && <div className={s.formGlobalError}>{error}</div> }
			<div> <span> <b> Full name : {createField<ProfileFormKeys>('text', 'Full name', 'fullName', [], Input)} </b></span></div>
			<div> <span> <b> Looking for a job : {createField<ProfileFormKeys>('checkbox', undefined, 'lookingForAJob', [], Input)}</b></span></div>
			<div><span> <b>My professional skills: {createField<ProfileFormKeys>(undefined, 'Write here Your skills', 'lookingForAJobDescription', [], Textarea)}</b></span></div>
			<div><span> <b> About me: {createField<ProfileFormKeys>(undefined, 'Info about me', 'aboutMe', [], Textarea)} </b></span></div>
			<span className={s.contactsSpan}>Contacts: </span> 
			{profile.contacts && Object.keys(profile.contacts).map(key => {
				return <div key={key} className={s.contacts}> <b> {key}: {createField('text', key, `contacts.${key}`, [], Input)} </b></div> 
			})}
		</form>
	)
}

const ProfileDataFormReduxForm = reduxForm<ProfileFormType, ProfileFormOwnPropsType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;

type ProfileFormOwnPropsType = { profile: ProfileTypeDataEl }
type ProfileFormKeys = Extract<keyof ProfileFormType, string | boolean>