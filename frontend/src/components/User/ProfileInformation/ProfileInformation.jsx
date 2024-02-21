import React from 'react';
import './_ProfileInformation.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiService from '../../../services/apiService';
import { setProfile, updateUserName } from '../../../redux/reducers/userProfileSlice';

export default function ProfileInformation() {

  const { firstName, lastName } = useSelector((state) => state.userProfile.userProfile);
    const token = useSelector((state) => state.user.value.token);
    const [isEditing, setIsEditing] = useState(false);
    const [editedFirstName, setEditedFirstName] = useState(firstName);
    const [editedLastName, setEditedLastName] = useState(lastName);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const userProfileData = await apiService.getUserProfile(token)
                dispatch(setProfile(userProfileData));

                setEditedFirstName(userProfileData.firstName);
                setEditedLastName(userProfileData.lastName);
            } catch (error) {
                console.error('Error fetching user profile:', error.message);
            }
        };

        fetchProfileData();
    }, [dispatch, token]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        dispatch(updateUserName({ firstName: editedFirstName, lastName: editedLastName }));
        setIsEditing(false);

      
        try {
            await apiService.updateUserProfile(token, { firstName: editedFirstName, lastName: editedLastName });
        } catch (error) {
            console.error('Error updating user profile:', error.message);
        }
    };

    const handleCancelClick = () => {
        
        setEditedFirstName(firstName);
        setEditedLastName(lastName);
        setIsEditing(false);
    };


  return (
    <div className="header">
    {isEditing ? (
        <>
            <h1>Welcome back</h1>
            <form className="edit-form">
                <div className="left-container">
                    <input
                        type="text"
                        id="editedFirstName"
                        placeholder={firstName}
                        onChange={(e) => setEditedFirstName(e.target.value)}
                    />
                    <button className="save-btn" onClick={handleSaveClick}>Save</button>
                </div>
                <div className="right-container">
                    <input
                        type="text"
                        id="editedLastName"
                        placeholder={lastName}
                        onChange={(e) => setEditedLastName(e.target.value)}
                    />
                    <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </>
    ) : (
        <>
            <h1>Welcome back<br />{`${firstName} ${lastName}!`}</h1>
            <button className="edit-button" onClick={handleEditClick}>
                Edit Name
            </button>
        </>
    )}
</div>
  );
}
