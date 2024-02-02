	var productTab = document.getElementById("custom_tab_0");
	var productTabAnchor = document.getElementById('section-product-tab');
if(productTab){productTab.classList.remove("fade");
               productTab.classList.add("active");
              }
if(productTabAnchor){
  productTabAnchor = productTabAnchor.getElementsByTagName('a')[0];
  productTabAnchor.classList.add("active");}