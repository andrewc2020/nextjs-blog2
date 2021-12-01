
  interface MailtoProps {
    // any props that come into the component
    email: string,
    subject: string,
    body:string
    children: any
  }
  export default function  Mailto({ email, subject = '', body = '', children } : MailtoProps){
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${body}`;
        return  <a href={`mailto:${email}${params}`}>{children}</a>
        
      };
    
  