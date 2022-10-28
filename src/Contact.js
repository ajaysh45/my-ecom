import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .mama{
  text-align: center;
padding:10px;
margin-top:-4%
}
.mama1{

  font-size:100px
}

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
    <div className="mama">
      <h3 className="mama1" >Contact Page</h3>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4230.5480285100475!2d75.65677731937669!3d26.920860296606744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d9d240f3459%3A0x9d4b5c10fcfcda10!2sBindayaka%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1666448701924!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
<div className="container">
      <div className="contact-form">
    <form action="https://formspree.io/f/mzbwalva" className="contact" method="POST">
 <input type="text"
   name="name"
    placeholder="Enter Your Name"
    />
    <input type="text"
    name="email"
    placeholder="exy@gmail.com"
    autoComplete="off"
    />
    <textarea 
    name="text"
     placeholder="write your enquiry"
      cols="30" 
      rows="10"
      ></textarea>
      <input type="submit" value="submit now"/>

      </form>
      </div>
      </div>
    </Wrapper>
  )
};

export default Contact;
