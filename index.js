let atStep = 1;
highlight(atStep);

/*step 1 start*/
const next_1 = document.querySelector('#next_1');

next_1.addEventListener('click', ()=> {
  let inputStatus = "empty";
  let auth = "invalid";
  
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const ph_no = document.querySelector('#ph_no');
  
  const name_err = document.querySelector('.name_err');
  const email_err = document.querySelector('.email_err');
  const phone_err = document.querySelector('.phone_err');
  
  //Name errors and validation
  if(name.value == ""){
    name_err.innerHTML = "This field is required";
    
    name.style = `
      border: 1.5px solid hsl(354, 84%, 57%)
    `;
  }
  
  else if(name.value != ""){
    var nameRegex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    const nameVal = name.value;
    
    if(!nameVal.match(nameRegex)){
      name_err.innerHTML = "Invalisd name";
      name.style = `
        border: 1.5px solid hsl(354, 84%, 57%)
      `;
      
      auth = "invalid";
    }
    
    else {
      name_err.innerHTML = "";
      name.style = `
        border: 1.5px solid hsl(231, 11%, 63%)
      `;
      
      auth = "valid";
    }
  }
  
  //Email errors and validation
  if(email.value == ""){
    email_err.innerHTML = "This field is required";
    
    email.style = `
      border: 1.5px solid hsl(354, 84%, 57%)
    `;
  }
    
  else if(email.value != ""){
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailVal = email.value;
    
    if(!emailVal.match(emailRegex)){
      email_err.innerHTML = "Invalid Email Address";
      email.style = `
        border: 1.5px solid hsl(354, 84%, 57%)
      `;
      
      auth = "invalid";
    }
    
    else {
      email_err.innerHTML = "";
      email.style = `
        border: 1.5px solid hsl(231, 11%, 63%)
      `;
      
      auth = "valid";
    }
  }
  
  //Phone_no errors and validation
  if(ph_no.value == ""){
    phone_err.innerHTML = "This field is required";
    
    ph_no.style = `
      border: 1.5px solid hsl(354, 84%, 57%)
    `;
  }
  
  else if(ph_no.value != ""){
    function validatePhoneNumber(inputPhone) {
      var phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    
      return phoneRegex.test(inputPhone);
    }
    
    const phoneVal = ph_no.value;
   
    if(!validatePhoneNumber(phoneVal)){
      phone_err.innerHTML = "Invalid phone number";
      
      ph_no.style = `
        border: 1.5px solid hsl(354, 84%, 57%)
      `;
      
      auth = "invalid";
    }
    
    else {
      phone_err.innerHTML = "";
      
      ph_no.style = `
        border: 1.5px solid hsl(231, 11%, 63%)
      `;
      
      auth = "valid";
    }
  }
  
  //check input ststus
  if(name.value == "" || email.value == "" || ph_no.value == "" || auth == "invalid"){
     inputStatus = "empty";
  } 
  else {
     inputStatus = "filled";
  }

  //collect personal info
  const personal_details = {
      name: name.value, email: email.value, ph_no: ph_no.value
  }
  
  //Move to step 2
  if(inputStatus == "filled"){
    document.querySelector('.step_1').classList.add('hidden');

    document.querySelector('.step_2').classList.remove('hidden');
    
    atStep = 2;
    highlight(atStep);
    console.log(personal_details);
    return personal_details;
  } 
});

/*step 1 end*/

/*step 2 Start*/
let subscription = "monthly";
let plan;
let status = "pending";
let rate;
let plan_price;
let planNum;
let subPlan;

//Toggling monthly or yearly subscriptions
const arcSub = document.querySelector('#arcSub');
const advSub = document.querySelector('#advSub');
const proSub = document.querySelector('#proSub');

const year_opt = document.querySelector('.year_opt');
const month_opt = document.querySelector('.month_opt');

const monthly_sub = document.querySelector('.monthly_sub');
const yearly_sub = document.querySelector('.yearly_sub');

const plans = document.querySelectorAll('.plan');

//Switch to yearly
year_opt.addEventListener('click', ()=> {
  month_opt.classList.remove('hidden');
  year_opt.classList.add('hidden');
  
  monthly_sub.style = 'color: hsl(231, 11%, 63%)';
  yearly_sub.style = 'color: hsl(213, 96%, 18%)';
  
  arcSub.innerHTML = "$90/yr";
  advSub.innerHTML = "$120/yr";
  proSub.innerHTML = "$150/yr";
  
  document.querySelector('.yr_offer_1').classList.remove('hide');
  document.querySelector('.yr_offer_2').classList.remove('hide');
  document.querySelector('.yr_offer_3').classList.remove('hide');
  
  plans.forEach(plan => {
    plan.style = `
      background: transparent;
      border: 1.6px solid hsl(229, 24%, 87%)
    `;
  })
  
  subscription = "yearly";
  status = "pending";
});

//Switch to monthly
month_opt.addEventListener('click', ()=> {
  month_opt.classList.add('hidden');
  year_opt.classList.remove('hidden');
  
  monthly_sub.style = 'color: hsl(213, 96%, 18%)';
  yearly_sub.style = 'color: hsl(231, 11%, 63%)';
  
  arcSub.innerHTML = "$9/mo";
  advSub.innerHTML = "$12/mo";
  proSub.innerHTML = "$15/mo";
  
  document.querySelector('.yr_offer_1').classList.add('hide');
  document.querySelector('.yr_offer_2').classList.add('hide');
  document.querySelector('.yr_offer_3').classList.add('hide');
  
  plans.forEach(plan => {
    plan.style = `
      background: transparent;
      border: 1.6px solid hsl(229, 24%, 87%)
    `;
  })
  
  subscription = "monthly";
  status = "pending";
});

//Selecting plan
const arcade = document.querySelector('.arcade');
const advanced = document.querySelector('.advanced');
const pro = document.querySelector('.pro');

plans.forEach(plan => {
  plan.addEventListener('click', ()=> {
    status = "okay";
  })
})

arcade.addEventListener('click', ()=> {
  arcade.style = `
    background-color: hsl(217, 100%, 97%);
    border: 1.8px solid hsl(213, 96%, 18%)
  `;
  
  advanced.style = `
    background: transparent;
    border: 1.6px solid hsl(229, 24%, 87%)
  `;
  
  pro.style = `
    background: transparent;
    border: 1.6px solid hsl(229, 24%, 87%)
  `;
  
  plan = "Arcade";
  
  if (subscription == "yearly"){
    plan_price = "$90/yr";
  }
  else if (subscription == "monthly"){
    plan_price = "$9/mo";
  }
  
  planNum = extractNum(plan_price);
  
  subPlan = {
    plan, plan_price, planNum
  }
});

advanced.addEventListener('click', ()=> {
  advanced.style = `
    background-color: hsl(217, 100%, 97%);
    border: 1.8px solid hsl(213, 96%, 18%)
  `;
  
  arcade.style = `
    background: transparent;
    border: 1.6px solid hsl(229, 24%, 87%)
  `;
  
  pro.style = `
    background: transparent;
    border: 1.6px solid hsl(229, 24%, 87%)
  `;
  
  plan = "Advanced";
  if (subscription == "yearly"){
    plan_price = "$120/yr"
  }
  else if (subscription == "monthly"){
    plan_price = "$12/mo"
  }
  
  planNum = extractNum(plan_price);
  
  subPlan = {
    plan, plan_price, planNum
  }
});

pro.addEventListener('click', ()=> {
  pro.style = `
    background-color: hsl(217, 100%, 97%);
    border: 1.8px solid hsl(213, 96%, 18%)
  `;
  
  advanced.style = `
    background: transparent;
    border: 1.6px solid hsl(229, 24%, 87%)
  `;
  
  arcade.style = `
    background: transparent;
    border: 1.6px solid hsl(229, 24%, 87%)
  `;
  
  plan = "Pro";
  if (subscription == "yearly"){
    plan_price = "$150/yr"
  }
  else if (subscription == "monthly"){
    plan_price = "$15/mo"
  }
  
  planNum = extractNum(plan_price);
  
  subPlan = {
    plan, plan_price, planNum
  }
});

const next_2 = document.querySelector('#next_2');
const back_1 = document.querySelector('#back_1');

next_2.addEventListener('click', ()=> {
  console.log(status);
  
  if ( status == "okay"){
    const price_1 = document.querySelector('#price_1');
    const price_2 = document.querySelector('#price_2');
    const price_3 = document.querySelector('#price_3');
  
    if (subscription == "yearly"){
      price_1.innerHTML = "+$10/yr";
      price_2.innerHTML = "+$20/yr";
      price_3.innerHTML = "+$20/yr";
      
      rate = "Per year";
    }
    else if (subscription == "monthly"){
      price_1.innerHTML = "+$1/mo";
      price_2.innerHTML = "+$2/mo";
      price_3.innerHTML = "+$2/mo";
      
      rate = "Per month";
    }
    
    document.querySelector('.step_2').classList.add('hidden');
    document.querySelector('.step_3').classList.remove('hidden');
    
    console.log(subPlan);
    atStep = 3;
    highlight(atStep);
  }
  else if(status == "pending"){
    alert("Select subscription plan");
  }
});

back_1.addEventListener('click', ()=> {
  document.querySelector('.step_2').classList.add('hidden');
  document.querySelector('.step_1').classList.remove('hidden');
  
  atStep = 1;
  highlight(atStep);
});
/* Step 2 end */


/* Step 3 start */
let addons;
let summary;

const addon_1 = document.querySelector('.addon_1');
const check_1 = document.querySelector('#check_1');
const addon_2 = document.querySelector('.addon_2');
const check_2 = document.querySelector('#check_2');
const addon_3 = document.querySelector('.addon_3');
const check_3 = document.querySelector('#check_3');

const next_3 = document.querySelector('#next_3');
const back_2 = document.querySelector('#back_2');

next_3.addEventListener('click', ()=> {
    const price_1 = document.querySelector('#price_1').innerHTML;
    const price_2 = document.querySelector('#price_2').innerHTML;
    const price_3 = document.querySelector('#price_3').innerHTML;
    
    var addonNum_1 = extractNum(price_1);
    var addonNum_2 = extractNum(price_2);
    var addonNum_3 = extractNum(price_3);
    
  //checkbox scenarios  
  if (check_1.checked == true && check_2.checked == false && check_3.checked == false){
    
    addons = [{
      type: "Online Service",
      addonPrice: {
        asString: price_1,
        asNum: addonNum_1
      }
    }];
    
    summary = {
      subPlan, addons
    };
  }
  
  else if (check_1.checked == false && check_2.checked == true && check_3.checked == false){
    
    addons = [{
      type: "Larger storage",
      addonPrice: {
        asString: price_2,
        asNum: addonNum_2
      }
    }];
    
    summary = {
      subPlan, addons
    };
  }
  
  else if (check_1.checked == false && check_2.checked == false && check_3.checked == true){
    
    addons = [{
      type: "Customizable profile",
      addonPrice: {
        asString: price_3,
        asNum: addonNum_3
      }
    }];
    
    summary = {
      subPlan, addons
    };
  }

  else if (check_1.checked == true && check_2.checked == true && check_3.checked == false){
    
    addons = [
      {
        type: "Online Service",
        addonPrice: {
          asString: price_1,
          asNum: addonNum_1
        }
      },
      {
        type: "Larger storage",
        addonPrice: {
          asString: price_2,
          asNum: addonNum_2
        }
      }
    ];
    summary = {
      subPlan, addons
    };
  }
  
  else if (check_1.checked == true && check_2.checked == false && check_3.checked == true){
    
    addons = [
      {
        type: "Online Service",
        addonPrice: {
          asString: price_1,
          asNum: addonNum_1
        }
      },
      {
        type: "Customizable profile",
        addonPrice: {
          asString: price_3,
          asNum: addonNum_3
        }
      }
    ];
    summary = {
      subPlan, addons
    };
  }
  
  else if (check_1.checked == false && check_2.checked == true && check_3.checked == true){
    
    addons = [
      {
        type: "Larger storage",
        addonPrice: {
          asString: price_2,
          asNum: addonNum_3
        }
      },
      {
        type: "Customizable profile",
        addonPrice: {
          asString: price_3,
          asNum: addonNum_3
        }
      }
    ];
    summary = {
      subPlan, addons
    };
  }
  
  else if (check_1.checked == true && check_2.checked == true && check_3.checked == true){
    
    addons = [
      {
        type: "Online Service",
        addonPrice: {
          asString: price_1,
          asNum: addonNum_1
        }
      },
      {
        type: "Larger storage",
        addonPrice: {
          asString: price_2,
          asNum: addonNum_2
        }
      },
      {
        type: "Customizable profile",
        addonPrice: {
          asString: price_3,
          asNum: addonNum_3
        }
      }
    ];
    summary = {
      subPlan, addons
    };
  }
  
  else if (check_1.checked == false && check_2.checked == false && check_3.checked == false){
    
    addons = [];
  }
  
  //Render summary of users' options
  const render_summary = document.querySelector('.render_summary');
  
  let final_addons = "";
  let addonSum = 0;
  
  for (var i = 0; i < addons.length; i++){
    final_addons += `
        <div>
          <span>${addons[i].type}</span>
          <span>
            ${addons[i].addonPrice.asString}
          </span>
        </div>
    `;
    
    addonSum += addons[i].addonPrice.asNum;
  }
  
  var priceSum = planNum + addonSum;
  
  if(subscription == "yearly"){
    total = `$${priceSum}/yr`;
  }
  else if(subscription == "monthly"){
    total = `$${priceSum}/mo`;
  }
 
  render_summary.innerHTML =`
    <div class="summary">
      <div class="final_plan">
        <span>
          <div>${subPlan.plan} (${subscription})</div>
          <div onclick = change();>change</div>
        </span>
        <span>${subPlan.plan_price}</span>
      </div>
      
      <div class="final_addons">
        ${final_addons}
      </div>
    </div>
    
    <div class="total">
      <span>Total (${rate})</span>
      <span>${total}</span>
    </div>
  `;
  
  document.querySelector('.step_3').classList.add('hidden');
  document.querySelector('.step_4').classList.remove('hidden');
  
  atStep =  4;
  highlight(atStep);
  console.log(summary);
});

back_2.addEventListener('click', ()=> {
  document.querySelector('.step_3').classList.add('hidden');
  document.querySelector('.step_2').classList.remove('hidden');
  
  atStep = 2;
  highlight(atStep);
});

/* Step 3 end */


/* Step 4 start */
const next_4 = document.querySelector('#next_4');
const back_3 = document.querySelector('#back_3');

back_3.addEventListener('click', ()=> {
  document.querySelector('.step_4').classList.add('hidden');
  document.querySelector('.step_3').classList.remove('hidden');
  
  atStep = 3;
  highlight(atStep);
});

function change() {
  document.querySelector('.step_4').classList.add('hidden');
  document.querySelector('.step_2').classList.remove('hidden');
  
  plans.forEach(plan => {
    plan.style = `
      background: transparent;
      border: 1.6px solid hsl(229, 24%, 87%)
    `;
  })
  
  atStep = 2;
  status = "pending";
};

next_4.addEventListener('click', ()=> {

  document.querySelector('.step_4').classList.add('hidden');

  document.querySelector('.step_5').classList.remove('hidden');
  
  //resize to fit thankyou card
  const boxSteps = document.querySelector(".boxSteps");

  var size = window.matchMedia("(max-width: 600px)");
  
  function resize(size){
    if (size.matches){
      boxSteps.style = `
        padding: 4rem 0
      `;
    } else {
      boxSteps.style = `
        padding: 7.5rem 0
      `;
    }
  }
  
  size.addEventListener("change", ()=> {
    resize(size);
  })
  
  resize(size);
});

/* Step 4 end */


//Extract number from string as substring
function extractNum(priceString){
  let priceNum;
  
  if(priceString.includes('+')){
    if(priceString.length == 8){
      priceNum = Number(priceString.substring(2, 5));
    }
    
    else if(priceString.length == 7){
      priceNum = Number(priceString.substring(2, 4));
    }
    
    else if(priceString.length == 6){
      priceNum = Number(priceString.substring(2, 3));
    }
  }
  
  else {
    if(priceString.length == 7){
      priceNum = Number(priceString.substring(1, 4));
    }
    
    else if(priceString.length == 6){
      priceNum = Number(priceString.substring(1, 3));
    }
    
    else if(priceString.length == 5){
      priceNum = Number(priceString.substring(1, 2));
    }
  }
  
  return priceNum;
}

//Highlight step number on sidebar/navbar
function highlight(atStep){
  const st1 = document.querySelector('.st1');
  const st2 = document.querySelector('.st2');
  const st3 = document.querySelector('.st3');
  const st4 = document.querySelector('.st4');
  
  if (atStep == 1){
    st1.style = `
      background-color: hsl(206, 94%, 87%);
      color: hsl(213, 96%, 18%)
    `;
    st2.style = `
      background: transparent;
      color: white
    `;
    st3.style = `
      background: transparent;
      color: white
    `;
    st4.style = `
      background: transparent;
      color: white
    `;
  }
  
  else if (atStep == 2){
    st2.style = `
      background-color: hsl(206, 94%, 87%);
      color: hsl(213, 96%, 18%)
    `;
    st1.style = `
      background: transparent;
      color: white
    `;
    st3.style = `
      background: transparent;
      color: white
    `;
    st4.style = `
      background: transparent;
      color: white
    `;
  }
  
  else if (atStep == 3){
    st3.style = `
      background-color: hsl(206, 94%, 87%);
      color: hsl(213, 96%, 18%)
    `;
    st2.style = `
      background: transparent;
      color: white
    `;
    st1.style = `
      background: transparent;
      color: white
    `;
    st4.style = `
      background: transparent;
      color: white
    `;
  }
  
  else if (atStep == 4){
    st4.style = `
      background-color: hsl(206, 94%, 87%);
      color: hsl(213, 96%, 18%)
    `;
    st2.style = `
      background: transparent;
      color: white
    `;
    st3.style = `
      background: transparent;
      color: white
    `;
    st1.style = `
      background: transparent;
      color: white
    `;
  }
  
  console.log("atStep: " + atStep);
}

