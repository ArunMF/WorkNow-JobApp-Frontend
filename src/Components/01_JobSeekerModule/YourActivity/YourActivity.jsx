import React, { useState } from 'react'
import { TiBookmark } from "react-icons/ti";
import { SiTicktick } from "react-icons/si";
import SavedJobs from './SavedJobs/SavedJobs';
import AppliedJobs from './AppliedJobs/AppliedJobs';

function YourActivity() {

    const [compName, setCompName] = useState('SavedJobs')

    const pageBtnStyle = {
        color: "#198754",
        backgroundColor: "#fafafa"
    }

    return (
        <div>
            <div className='d-flex justify-content-center my-4'>
                <button className='btn btn-white border-0 mx-2 px-5 py-2' style={(compName == 'SavedJobs') ? pageBtnStyle : {}} onClick={() => { setCompName('SavedJobs') }}><b><TiBookmark /> Saved Jobs</b></button>
                <button className='btn btn-white border-0 mx-2 px-5 py-2' style={(compName == 'AppliedJobs') ? pageBtnStyle : {}} onClick={() => { setCompName('AppliedJobs') }}><b><SiTicktick /> Applied Jobs</b></button>
            </div>
            <div className='d-flex justify-content-center border-0 border-bottom border-top mx-4 p-3'>
                {
                    compName == 'SavedJobs' &&
                    <SavedJobs />
                }

                {
                    compName == 'AppliedJobs' &&
                    <AppliedJobs />
                }
            </div>
        </div>
    )
}

export default YourActivity