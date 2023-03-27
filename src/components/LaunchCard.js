import React, { useState, useEffect } from "react";

export const LaunchCard = ({ launchData }) => {

    console.log(launchData)

    return(
        <div key={launchData.id}>
            <p>
                {launchData.name}
            </p>
            <p>
                {launchData.data_local}
            </p>
            <p>
                {launchData.details}
            </p>
        </div>
    )

}