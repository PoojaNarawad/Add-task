import React from 'react';
import "./adlibrary.css";

const AdLibrary = () => {
  return (
    <>
      <section>
    <div>
      <h1>Ad Library</h1>
      <p>
      The Ad Library provides advertising transparency <br></br>
      by offering a comprehensive,searchable collection<br></br>
      of all ads currently running from across Meta <br></br>
      technologies.
      </p>
      <button>See what's new</button>
    </div>
    <div>
     <img src="https://img.freepik.com/premium-vector/girl-with-pc-working-from-home-illustration_9845-250.jpg?w=360" alt="Source not found"/>
    </div>
  </section>
  <div>
  <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
  </div>
    </>
  )
}

export default AdLibrary