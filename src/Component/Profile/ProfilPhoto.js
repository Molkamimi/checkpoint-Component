import React from 'react';
import Picture from "./Picture.jpg";

export default function ProfilPhoto() {
    return (
      <div>
        <img src={Picture} alt="Profile" width="60%" /> <br />
      </div>
    );
  }
