let total_sell;
total_sell=0;
const cart_total_price=document.getElementById('total_price');
const cart_list=document.getElementById('cart_list')
// --------------------------------------------------------------------------
document.getElementById('K-accesories-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('k-accesories-price').innerText);
    const product_name=document.getElementById('k-accesories').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
    if (cart_total_price.innerText>0) {
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    if (cart_total_price.innerText>=200) {
        document.getElementById('cupon_btn').removeAttribute('disabled');
        if (document.getElementById('cupon_btn').value==='SELL200') {
            const discunt=cart_total_price*(20/100);
            document.getElementById('cupon_btn').addEventListener('click',function(){        
                cart_total_price.innerText=cart_total_price-discunt;
            })
        }
    }
    


    
})

document.getElementById('k-accesories-2-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('k-accesories-2-price').innerText);
    const product_name=document.getElementById('k-accesories-2').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
}) 


document.getElementById('home-cooker-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('home-cooker-price').innerText);
    const product_name=document.getElementById('home-cooker').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
}) 

document.getElementById('sports-cap-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('sports-cap-price').innerText);
    const product_name=document.getElementById('sports-cap').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
}) 

document.getElementById('jursey-set-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('jursey-set-price').innerText);
    const product_name=document.getElementById('jursey-set').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
}) 

document.getElementById('sports-cates-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('sports-cates-price').innerText);
    const product_name=document.getElementById('sports-cates').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
}) 


document.getElementById('relax-chair-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('relax-chair-price').innerText);
    const product_name=document.getElementById('relax-chair').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
})

document.getElementById('children-play-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('children-play-price').innerText);
    const product_name=document.getElementById('children-play').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
})

document.getElementById('flexible-sofa-p-btn').addEventListener('click',function K_accesories(){
    const product_price=parseFloat(document.getElementById('flexible-sofa-price').innerText);
    const product_name=document.getElementById('flexible-sofa').innerText;
    const li=document.createElement('li');
    li.innerText=product_name;
    cart_list.appendChild(li);
    total_sell+=product_price;
    cart_total_price.innerText=total_sell;
})
// --------------------------------------------------------

console.log(cart_list.innerText);
console.log(total_sell);
if (cart_total_price.innerText>0) {
    console.log('ok');
    document.getElementById('purchase-btn').removeAttribute('disabled');
}

