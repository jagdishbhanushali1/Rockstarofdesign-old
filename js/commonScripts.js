var _gaq = _gaq || [];
_gaq.push(['s2._setAccount', 'UA-32624714-1']);
_gaq.push(['s2._trackPageview']);
_gaq.push(['s2._setSiteSpeedSampleRate', 50]);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
$(document).ready(function(){
   if($('form[name="transferdomain"]').length){

       $('select[id="tldSelector"]').change(function(){
           var tld_value = document.transferdomain.tlds.value;
           if ((tld_value.match(/.*(nz)$/)) || (tld_value == 'de') || (tld_value == 'eu')
               || (tld_value == 'ca') || (tld_value.match(/.*(au)$/))) {
                   $('input[name="Checkout"][id="checkoutButton"]').addClass('frmButton-disable');
                   $('input[name="Checkout"][id="checkoutButton"]').removeClass('uiButton');
           } else {
                $('input[name="Checkout"][id="checkoutButton"]').addClass('uiButton');
                $('input[name="Checkout"][id="checkoutButton"]').removeClass('frmButton-disable');
           }
       });

       $('input[name="secretname"]').keyup(function(e){
          if(e.which != 9){ //prevent this on TAB key
              if($(this).val() == '') {
                  $(this).css('border-color','red');
                  $('input[name="Checkout"][id="checkoutButton"]').addClass('frmButton-disable');
                  $('input[name="Checkout"][id="checkoutButton"]').removeClass('uiButton');
              } else {
                  $(this).css('border-color','rgba(82, 168, 236, 0.8)');
                  $('input[name="Checkout"][id="checkoutButton"]').addClass('uiButton');
                  $('input[name="Checkout"][id="checkoutButton"]').removeClass('frmButton-disable');
              }
          }
       });

       $('input[name="Checkout"][id="checkoutButton"]').click(function(){
           if($(this).hasClass('frmButton-disable')){
              $('input[name="secretname"]').css('border-color','red').focus();
              return false;
           }
           return true;
       });
   }
});

function do_register()
{
 document.myform.action="/domain.php?action=buy";
 document.myform.submit();
}
function log_out()
{
 ht = document.getElementsByTagName("html");
 ht[0].style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";

    var item_count = 0;
    if(typeof Cookies != 'undefined' && Cookies['cart_items'] != undefined) {
        item_count = Cookies['cart_items'];
    }

 if(item_count!=0)
 {
  var mess = document.getElementById('signout2').value;
 }
 else
 {
  var mess = document.getElementById('signout1').value;
 }
 if (confirm(mess))
 {
  return true;
 }
 else
 {
  ht[0].style.filter = "";
  return false;
 }
}
//Function to toggle Div, with Plus/Minus image
function togPlus(objDiv,objImg)
{
	if(document.getElementById(objDiv))
	{
		var myElement = document.getElementById(objDiv);    
		if (myElement.style.display == "none")
		{
      myElement.style.display = "block";
      objImg.src = "/getImage.php?src=collapse.gif";
		}
		else
		{
      myElement.style.display = "none";
      objImg.src = "/getImage.php?src=expand.gif";
		}
	}
}

function tog(objDiv)
{
	if(document.getElementById(objDiv))    
	{
		var myElement = document.getElementById(objDiv);
		if(myElement.style.display == "none")
		{
			myElement.style.display = "block";
		}
		else
		{
			myElement.style.display = "none";
		}
	}
}

function togLogin(status)
{
	if(document.getElementById('sidebar-login'))    
	{
		var myElement = document.getElementById('sidebar-login');
		myElement.style.display = status;
	}
}

// toggle row bgcolors and set active row bgcolor
var activeRow = null;
	
function rowOver(thisRow) {
 if(thisRow.className=="row")
	 thisRow.className = "row-over";
}

function rowOut(thisRow) {
 if(thisRow.className=="row-over")
	 thisRow.className = "row";
}

var classtype;
classtype=null;
function carowOver(thisRow) {
    if(thisRow.className=="")
    {
	 thisRow.className = "row-over";
	 classtype="";
	}
    if(thisRow.className=="alt")
    {
	 thisRow.className = "row-over";
	 classtype="alt";
    }
}

function carowOut(thisRow) {
   if(thisRow.className=="row-over")
	 thisRow.className = classtype;
}

function rowClick(thisRow) {
	if (thisRow.className=="row" || thisRow.className=="row-over")
    	thisRow.className = "row-active";
    else
    	thisRow.className = "row";
}
/////////////////
function Toggle(e)
{	
	var checkflag=false;
	var i,count;
	count=0;
    if (e.checked)
    {
		Highlight(e);
    }
    else
    {
		r = e.parentNode.parentNode;
		count=r.childNodes.length;
		i=0;
		while(i<count)
		{
			if(r.childNodes[i].nodeName=="TD")
			{
				if(r.childNodes[i].firstChild.type=="checkbox" && r.childNodes[i].firstChild.checked)
				{
					checkflag=true;
					break;
				}
			}
			i++;
		}
	if(checkflag==false)
		Unhighlight(e);
    }
}


function Highlight(e)
{
    var r = null;
    if (e.parentNode && e.parentNode.parentNode)
    {
    r = e.parentNode.parentNode;
    }
    else if (e.parentElement && e.parentElement.parentElement)
    {
    r = e.parentElement.parentElement;
    }
    if (r)
    {
    (r.className == "row")
    r.className = "row-active";
    }
}


function Unhighlight(e)
{
    var r = null;
    if (e.parentNode && e.parentNode.parentNode)
    {
    r = e.parentNode.parentNode;
    }
    else if (e.parentElement && e.parentElement.parentElement)
    {
    r = e.parentElement.parentElement;
    }

    if (r)
    {
    (r.className == "row-active")
    r.className = "row";
    }
}
/////////////////////////////////
function Highlight_addservice(e)
{
    var r = null;
    if (e.parentNode && e.parentNode.parentNode)
    {
    r = e.parentNode.parentNode;
    }
    else if (e.parentElement && e.parentElement.parentElement)
    {
    r = e.parentElement.parentElement;
    }
    if (r)
    {
    (r.className == "alt")
    r.className = "row-active";
    }
}
function UnHighlight_addservice(e)
{
    var r = null;
    if (e.parentNode && e.parentNode.parentNode)
    {
    r = e.parentNode.parentNode;
    }
    else if (e.parentElement && e.parentElement.parentElement)
    {
    r = e.parentElement.parentElement;
    }
    if (r)
    {
    (r.className == "row-active")
    r.className = "alt";
    }
}
///////////////////////////////////
var tempbutton=null;
function chk_selected(check_selected_err,butt)
{
	var domlength,i,temp,flag;
	domlength=document.myform.domval.length;
	flag=false;
	if(document.myform.domval.checked)
	{
			flag=true;
	}
	for(i=0 ; i<domlength ; i++)
	{
		if(document.myform.domval[i].checked)
		{
			flag=true;
			break;
		}
	}
	if(flag==false)
	{
		/*var check_selected_err = document.getElementById('chk_selected_error');*/
		check_selected_err.style.display = 'block';
		/*window.scrollTo(-100,-1000);*/
		return false;
	}
	if(butt.className=="frmButton-disable")
	{
		return false;
	}
	else
	{
		tempbutton=butt;
	//butt.value="   Processing...  ";
	butt.className="frmButton-disable";
	animLoading();
	document.myform.action="/domain.php?action=buy";
	document.myform.submit();	
	}
	/*document.myform.action="domain.php?action=buy";
	checkandsubmit(butt,document.myform);
	/*butt.value='Processing..';
	butt.disabled=true;
	do_register();*/
}
var step=1;
function animLoading()
{
	butt = tempbutton;
	step++;
    if (step == 9) step = 1;

    var processing_text = get_translated_message('common_processing');

    if (step == 1)
    {
       window.status = processing_text + '.   ';
	   butt.value = processing_text + '.   ';
    }
    if (step == 2)
    {
        window.status = processing_text + '.   ';
		butt.value = processing_text + '.   ';
    }
    if (step == 3)
    {
        window.status = processing_text + '..  ';
		butt.value= processing_text + '..  ';
    }
    if (step == 4)
    {
        window.status = processing_text + '..  ';
	    butt.value = processing_text + '..  ';
    }
    if (step == 5)
    {
        window.status = processing_text + '... ';
	    butt.value = processing_text + '... ';
    }
    if (step == 6)
    {
        window.status = processing_text + '... ';
	    butt.value = processing_text + '... ';
    }
    if (step == 7)
    {
        window.status = processing_text + '....';
	    butt.value = processing_text + '....';
    }
    if (step == 8)
    {
        window.status = processing_text + '....';
        butt.value = processing_text + '....';
    }
    setTimeout("animLoading()", 200);
}


function trim(inputString) {
   // Removes leading and trailing spaces from the passed string. Also removes
   // consecutive spaces and replaces it with one space. If something besides
   // a string is passed in (null, custom object, etc.) then return the input.
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString;
   var ch = retValue.substring(0, 1);
   while (ch == " ") { // Check for spaces at the beginning of the string
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
   }
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { // Check for spaces at the end of the string
      retValue = retValue.substring(0, retValue.length-1);
      ch = retValue.substring(retValue.length-1, retValue.length);
   }
   while (retValue.indexOf("  ") != -1) { // Note that there are two spaces in the string - look for multiple spaces within the string
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); // Again, there are two spaces in each of the strings
   }
   return retValue; // Return the trimmed string back to the user
} // Ends the "trim" function

function round_decimals(original_number, decimals)
	{
		var result1 = original_number * Math.pow(10, decimals)
		var result2 = Math.round(result1)
		var result3 = result2 / Math.pow(10, decimals)
		return pad_with_zeros(result3, decimals)
	}

	function pad_with_zeros(rounded_value, decimal_places)
	{

		// Convert the number to a string
		var value_string = rounded_value.toString()
		
		// Locate the decimal point
		var decimal_location = value_string.indexOf(".")
		
		// Is there a decimal point?
		if (decimal_location == -1) 
	{
		// If no, then all decimal places will be padded with 0s
		decimal_part_length = 0

		// If decimal_places is greater than zero, tack on a decimal point
		value_string += decimal_places > 0 ? "." : ""
	}
	else 
	{
		// If yes, then only the extra decimal places will be padded with 0s
		decimal_part_length = value_string.length - decimal_location - 1
	}
		// Calculate the number of decimal places that need to be padded with 0s
		var pad_total = decimal_places - decimal_part_length
	
	if (pad_total > 0) 
	{
		// Pad the string with 0s
		for (var counter = 1; counter <= pad_total; counter++) 
		value_string += "0"
	}
		return value_string
	}
	
	function chk_button(formname)
	{
		var sub = document.getElementById('sub_button');
		if(formname.agree.checked)
		{
			sub.className='frmButton';
		}
		else
		{
			sub.className='frmButton-disable';
		}
	}

function checkandsubmit(butt,formname)
{
	if(butt.className=="frmButton-disable")
	{
		return false;
	}
	else
	{
		//butt.value="   Processing...  ";
		butt.className="frmButton-disable";
		//$("butt").attr("disabled","disabled");		
		tempbutton=butt;
		animLoading();
		formname.submit();	
	}
}

function on_mouse_over(butt)
{
	if(butt.className!="frmButton-disable")
		butt.className='frmButton-over';
}
function on_mouse_out(butt)
{
	if(butt.className!="frmButton-disable")
		butt.className='frmButton';
}

function on_mouse_over_secondary(butt)
{
	if(butt.className!="frmButton-disable")
		butt.className='frmButton-secondary-over';
}
function on_mouse_out_secondary(butt)
{
	if(butt.className!="frmButton-disable")
		butt.className='frmButton-secondary';
}


function open_new_window(url)
{
	window.open(url,'','menubar=no,location=no,resizable=yes,scrollbars=yes,status=no');
}

// alternating TD-TR Without PHP 

function colorRows(tableid) {
	   var myTR = tableid.getElementsByTagName('tr');
	   for (var i=0;i<myTR.length;i++) {
			   if (i%2) {
					   myTR[i].className = 'alt';
			   }
	   }
}

// BETTER ALTERNATING COLORED ROWS

var elem = "TR";
function alternating () {
  if(document.getElementsByTagName) {
    var el = document.getElementsByTagName(elem);
      for(var i=0; i<el.length; i++) {
          if(el[i].childNodes[0].tagName != "TH"
          && el[i].parentNode.parentNode.className.indexOf("alternating") != -1) {
        if(i%2 == 1){
          el[i].className = "alt";
      } else {
         el[i].className = "";
     }
    }
  }
}
}

function openPopUp(theURL,winName,features) {
  window.open(theURL,winName,features);
}

// MODAL Windows
// -----------------------------------------------------

function showModal(id){

	if(id==undefined){
		modalID = 'modal_div';
	}else{
		modalID = id;
	}
	
	$("#body-wrapper").append($("#"+modalID));
	$("#"+modalID).show();	
	$("select").not('#'+modalID+' select').hide();
	modalWidth = $(document).width();
	modalHeight = $(document).height();
	$(".modal_overlay").css('width', modalWidth);
	$(".modal_overlay").css('height', modalHeight);	
	$(document).scrollTo($("body"),75,null);
}

function closeModal(id){

	if(id==undefined){
		modalID = 'modal_div';
	}else{
		modalID = id;
	}

    $('#'+modalID).css('display','none');
	$("select").show();
	
}

// Resize Modal Box Overlay Window if browser is resized
// -----------------------------------------------------

	$(window).resize(function() {
	  resizeModal();
	});
	
	function resizeModal(){
		modalWidth = $(document).width();
		modalHeight = $(document).height();
		$(".modal_overlay").css('width', modalWidth);
		$(".modal_overlay").css('height', modalHeight);
	}
	

// Resize Modal Box Overlay Window if browser is resized
// -----------------------------------------------------	
	
	selectAllAvailableToggle = true;
	
	function selectAllAvailable(){
		if(selectAllAvailableToggle){
			$('div.available input.checkbox').attr('checked','TRUE');
			selectAllAvailableToggle = false;
		}else{
			$('div.available input.checkbox').attr('checked','');
			selectAllAvailableToggle = true;
		}
                change_total();
	}


function onBlur(el) {
    if (el.value == '')
	   {
		   el.value = el.defaultValue;
		}   
}
function onFocus(el) {
    if (el.value == el.defaultValue)
	   {
		   el.value = '';
		}
}


function escapeStr(str) {
 if(str)
     return str.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1')
 else
     return str;
}

function number_format (number, decimals, dec_point, thousands_sep) {
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function format_currency(price){
    decimal_sep = '.';
    thousands_sep = ',';
    if(typeof Cookies != 'undefined' && typeof Cookies.selected_lang != "undefined") {
        var language = ['es','pt','tr','de','id'];
        if(jQuery.inArray(Cookies.selected_lang,language) >= 0) {
            decimal_sep = ',';
            thousands_sep = '.';
        }
    }
    return number_format(price, 2, decimal_sep, thousands_sep);
}

function get_translated_message( message_key ){
    if(typeof objl10n[message_key] != 'undefined'){
        return objl10n[message_key];
    } else {
        return '';
    }
}

function get_unformatted_price(dom_price) {
    if(typeof Cookies != 'undefined' && typeof Cookies.selected_lang != "undefined") {
        var language = ['es','pt','tr','de','id'];
        if(jQuery.inArray(Cookies.selected_lang,language) >= 0) {
            dom_price = dom_price.replace('.','');
            dom_price = dom_price.replace(',', '.');
        }
        else {
            dom_price = dom_price.replace(',', '');
        }
    }
    return dom_price;
}