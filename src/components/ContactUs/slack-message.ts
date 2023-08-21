export const SlackMessageFormat = (formEmail: any) => {
  
  return `
    **New message!! 😄**
    *from email: ${formEmail.email ? formEmail.email : '-'}*
    
    *Name:*
    \`${formEmail.name ? formEmail.name : '-'}\`
    ------------------------------------
    *Company:*
    \`${formEmail.CompanyName ? formEmail.CompanyName : '-'}\`
    ------------------------------------
    *Email:*
    \`${formEmail.email ? formEmail.email : '-'}\`
    ------------------------------------
    *Preferred time slots:*
    \`${formEmail.timeSlot ? formEmail.timeSlot : '-'}\` ช่วงเวลา \`${formEmail.timePeriod ? formEmail.timePeriod : '-'}\`
    ------------------------------------ 
    *Tell us your idea:*
    \`${formEmail.tellAboutIdeaInput ? formEmail.tellAboutIdeaInput : '-'}\`
    ------------------------------------
    *Budget Amount*:
    \`${formEmail.budgetInput ? formEmail.budgetInput : '-'}\`
  `;
};
