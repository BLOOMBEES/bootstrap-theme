---
layout: docs
title: Product cards
group: components-css
---

Product cards are very flexible and customizable. 

## Default example

{% example html %}
<div class="products products-discover">
    <div class="col-sm-4 col-md-3 col-xl-2 product-container">
        <div class="products-block">
            <div class="image-preview">
                <div>
                    <div class="loader-container active">
                        <div class="loader"></div>
                    </div>
                    <div class="product-image" style="background-image: url(&quot;https://bloombees-googlestorage-7pxvh1vxhs.netdna-ssl.com/bloombees-public/upload2017/dev/stores/1957_beeracheltest0212b/products/228SJ/beeracheltest0212b-228SJ-baby_music_lover-rd-16385.jpeg&quot;);"></div>
                </div>
                <div class="overlay">
                    <a class="overlay-edit color-white fs-xx-10" href="#" target="_blank">Buy this product</a>
                </div>
                <div class="overlay-select">
                    <span class="icon bb-icon-check-in-o color-white fs-26 fw-bold"></span>
                </div>
            </div>
            <div class="product-details">
                <div class="fx fx-row fx-x-sb">
                    <h4 class="product-name product-name-initial mtb-0 lh-14 maxw-135 fs-xx-12"><a href="#" target="_blank" title="baby music lover">baby music lover</a></h4>
                    <div class="product-price fs-13 fs-xx-12 text-right">
                        <span>7.5</span> <span>€</span>
                    </div>
                </div>
                <div class="product-name product-name-store fs-xx-10 lh-xxs-10">
                    by <a href="#" target="_blank">beeRacheltest0212b</a>
                </div>
                <div class="text-center">
                    <button class="button button-main mt-xx-5 mt-20 ptb-5 fs-13 fs-xxs-11 fw-bold w-100">Share &amp; Earn <span>0.75</span> <span>€</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
{% endexample %}

## Selected product card

To select product add class `.selected` to the `.products-block` class.

{% example html %}
<div class="products products-discover">
    <div class="col-sm-4 col-md-3 col-xl-2 product-container">
        <div class="products-block">
            <div class="image-preview">
                <div>
                    <div class="loader-container active">
                        <div class="loader"></div>
                    </div>
                    <div class="product-image" style="background-image: url(&quot;https://bloombees-googlestorage-7pxvh1vxhs.netdna-ssl.com/bloombees-public/upload2017/dev/stores/1957_beeracheltest0212b/products/228SJ/beeracheltest0212b-228SJ-baby_music_lover-rd-16385.jpeg&quot;);"></div>
                </div>
                <div class="overlay">
                    <a class="overlay-edit color-white fs-xx-10" href="#" target="_blank">Buy this product</a>
                </div>
                <div class="overlay-select">
                    <span class="icon bb-icon-check-in-o color-white fs-26 fw-bold"></span>
                </div>
            </div>
            <div class="product-details">
                <div class="fx fx-row fx-x-sb">
                    <h4 class="product-name product-name-initial mtb-0 lh-14 maxw-135 fs-xx-12"><a href="#" target="_blank" title="baby music lover">baby music lover</a></h4>
                    <div class="product-price fs-13 fs-xx-12 text-right">
                        <span>7.5</span> <span>€</span>
                    </div>
                </div>
                <div class="product-name product-name-store fs-xx-10 lh-xxs-10">
                    by <a href="#" target="_blank">beeRacheltest0212b</a>
                </div>
                <div class="text-center">
                    <button class="button button-main mt-xx-5 mt-20 ptb-5 fs-13 fs-xxs-11 fw-bold w-100">Share &amp; Earn <span>0.75</span> <span>€</span></button>
                    <button class="button button-discover fx fx-x-center fx-y-center mt-xx-5 mt-10 ptb-5 fw-bold w-100 button-action">
                        <span class="product-not-selected fs-13 fs-xx-11" ng-hide="discover.product.StoreFront_dateInserted">Select</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-md-3 col-xl-2 product-container">
        <div class="products-block selected">
            <div class="image-preview">
                <div>
                    <div class="loader-container active">
                        <div class="loader"></div>
                    </div>
                    <div class="product-image" style="background-image: url(&quot;https://bloombees-googlestorage-7pxvh1vxhs.netdna-ssl.com/bloombees-public/upload2017/dev/stores/1957_beeracheltest0212b/products/228SJ/beeracheltest0212b-228SJ-baby_music_lover-rd-16385.jpeg&quot;);"></div>
                </div>
                <div class="overlay">
                    <a class="overlay-edit color-white fs-xx-10" href="#" target="_blank">Buy this product</a>
                </div>
                <div class="overlay-select">
                    <span class="icon bb-icon-check-in-o color-white fs-26 fw-bold"></span>
                </div>
            </div>
            <div class="product-details">
                <div class="fx fx-row fx-x-sb">
                    <h4 class="product-name product-name-initial mtb-0 lh-14 maxw-135 fs-xx-12"><a href="#" target="_blank" title="baby music lover">baby music lover</a></h4>
                    <div class="product-price fs-13 fs-xx-12 text-right">
                        <span>7.5</span> <span>€</span>
                    </div>
                </div>
                <div class="product-name product-name-store fs-xx-10 lh-xxs-10">
                    by <a href="#" target="_blank">beeRacheltest0212b</a>
                </div>
                <div class="text-center">
                    <button class="button button-main mt-xx-5 mt-20 ptb-5 fs-13 fs-xxs-11 fw-bold w-100">Share &amp; Earn <span>0.75</span> <span>€</span></button>
                    <button class="button button-discover fx fx-x-center fx-y-center mt-xx-5 mt-10 ptb-5 fw-bold w-100 button-action">
                        <span class="product-selected fs-13 fs-xx-11">Deselect</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-md-3 col-xl-2 product-container">
        <div class="products-block">
            <div class="image-preview">
                <div>
                    <div class="loader-container active">
                        <div class="loader"></div>
                    </div>
                    <div class="product-image" style="background-image: url(&quot;https://bloombees-googlestorage-7pxvh1vxhs.netdna-ssl.com/bloombees-public/upload2017/dev/stores/1957_beeracheltest0212b/products/228SJ/beeracheltest0212b-228SJ-baby_music_lover-rd-16385.jpeg&quot;);"></div>
                </div>
                <div class="overlay">
                    <a class="overlay-edit color-white fs-xx-10" href="#" target="_blank">Buy this product</a>
                </div>
                <div class="overlay-select">
                    <span class="icon bb-icon-check-in-o color-white fs-26 fw-bold"></span>
                </div>
            </div>
            <div class="product-details">
                <div class="fx fx-row fx-x-sb">
                    <h4 class="product-name product-name-initial mtb-0 lh-14 maxw-135 fs-xx-12"><a href="#" target="_blank" title="baby music lover">baby music lover</a></h4>
                    <div class="product-price fs-13 fs-xx-12 text-right">
                        <span>7.5</span> <span>€</span>
                    </div>
                </div>
                <div class="product-name product-name-store fs-xx-10 lh-xxs-10">
                    by <a href="#" target="_blank">beeRacheltest0212b</a>
                </div>
                <div class="text-center">
                    <button class="button button-main mt-xx-5 mt-20 ptb-5 fs-13 fs-xxs-11 fw-bold w-100">Share &amp; Earn <span>0.75</span> <span>€</span></button>
                    <button class="button button-discover fx fx-x-center fx-y-center mt-xx-5 mt-10 ptb-5 fw-bold w-100 button-default" disabled>
                        <span class="fs-11 fs-xx-10">Already added</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
{% endexample %}

## Storefront product cards

Products grid can have different size. Available sizes: small, medium, large. 
To set size add corresponding class name (medium -> `.medium`) to the `.products`.

{% example html %}
<div class="products medium">
	<div class="products-block">
        <div class="product-image" ng-style="products.setProductImage(product.Product_pictures[0].Picture_md350x350Url)" style="background-image: url(&quot;https://bloombees.com/h/api/assets/images/96710/products/md/img&quot;);">
            <span></span>
            <div class="overlay">
                <a class="overlay-edit color-white" target="_blank" href="#">View</a>
                <span class="icon-bb icon-drag-n-drop icon-drag"></span>
            </div>
        </div>
        <div class="product-details">
            <h4 class="product-name product-name-initial mtb-0 lh-14">
                <a target="_blank" href="#">Serie Costa Rica</a>
            </h4>
            <div class="product-name storefront-store color-grey-private">
                Sold by <a target="_blank" class="color-grey-private" href="#">Smart/dresses Madrid</a>
            </div>
            <div class="fx fx-row fx-x-sb color-green product-name product-prices">
                <span>You earn</span>
                <div>
                    <span>0.10</span> <span>€</span>
                </div>
            </div>
            <div class="product-actions">
                <div class="product-actions-inner">
                    <span class="icon-bb icon-share-product color-green fs-15 plr-5">
                    </span>
                    <div class="performance-icon color-green fs-15 plr-5">
                    </div>
                    <span class="icon-bb icon-delete-product color-green fs-15 plr-5">
                    </span>
                </div>
                <div>
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
    <div class="products-block">
        <div class="product-image" ng-style="products.setProductImage(product.Product_pictures[0].Picture_md350x350Url)" style="background-image: url(&quot;https://bloombees.com/h/api/assets/images/96710/products/md/img&quot;);">
            <span></span>
            <div class="overlay">
                <a class="overlay-edit color-white" target="_blank" href="#">View</a>
                <span class="icon-bb icon-drag-n-drop icon-drag"></span>
            </div>
        </div>
        <div class="product-details">
            <h4 class="product-name product-name-initial mtb-0 lh-14">
                <a target="_blank" href="#">Serie Costa Rica</a>
            </h4>
            <div class="product-name storefront-store color-grey-private">
                Sold by <a target="_blank" class="color-grey-private" href="#">Smart/dresses Madrid</a>
            </div>
            <div class="fx fx-row fx-x-sb color-green product-name product-prices">
                <span>You earn</span>
                <div>
                    <span>0.10</span> <span>€</span>
                </div>
            </div>
            <div class="product-actions">
                <div class="product-actions-inner">
                    <span class="icon-bb icon-share-product color-green fs-15 plr-5">
                    </span>
                    <div class="performance-icon color-green fs-15 plr-5">
                    </div>
                    <span class="icon-bb icon-delete-product color-green fs-15 plr-5">
                    </span>
                </div>
                <div>
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
    <div class="products-block">
        <div class="product-image" ng-style="products.setProductImage(product.Product_pictures[0].Picture_md350x350Url)" style="background-image: url(&quot;https://bloombees.com/h/api/assets/images/96710/products/md/img&quot;);">
            <span></span>
            <div class="overlay">
                <a class="overlay-edit color-white" target="_blank" href="#">View</a>
                <span class="icon-bb icon-drag-n-drop icon-drag"></span>
            </div>
        </div>
        <div class="product-details">
            <h4 class="product-name product-name-initial mtb-0 lh-14">
                <a target="_blank" href="#">Serie Costa Rica</a>
            </h4>
            <div class="product-name storefront-store color-grey-private">
                Sold by <a target="_blank" class="color-grey-private" href="#">Smart/dresses Madrid</a>
            </div>
            <div class="fx fx-row fx-x-sb color-green product-name product-prices">
                <span>You earn</span>
                <div>
                    <span>0.10</span> <span>€</span>
                </div>
            </div>
            <div class="product-actions">
                <div class="product-actions-inner">
                    <span class="icon-bb icon-share-product color-green fs-15 plr-5">
                    </span>
                    <div class="performance-icon color-green fs-15 plr-5">
                    </div>
                    <span class="icon-bb icon-delete-product color-green fs-15 plr-5">
                    </span>
                </div>
                <div>
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
</div>
{% endexample %}

## Merchant product cards

To open actions popover you need to:
- add class `.actions-popover-opened` to the `.products-block`
- remove class `.hidden` from `.actions-popover`

#### ___Example___

{% example html %}
<div class="products medium">
	<div class="products-block">
        <div class="product-image" style="background-image: url(&quot;https://bloombees.com/h/api/assets/images/96710/products/md/img&quot;);">
            <span>
                <span class="product-label product-label-new">new</span>
            </span>
                <span class="product-photos" ng-if="product.Product_picturesCount > 1">
                <span class="icon-bb icon-photo-camera"></span> +<span>3</span>
            </span>
            <div class="overlay">
                <div class="overlay-edit">View & Edit</div>
                <span class="icon-bb icon-drag-n-drop icon-drag"></span>
            </div>
        </div>
        <div class="product-details">
            <h4 class="product-name product-name-initial mtb-0 lh-14">
                <a href="#">Serie Costa Rica</a>
            </h4>
            <div class="product-prices">
                <div class="product-price">
                    <span>1</span> <span>€</span>
                </div>
                <div class="product-price-promo invisible">
                    <span></span> <span>€</span>
                </div>
                <div class="product-custom-shipping">
                    <span class="icon-bb icon-shipping-custom fs-25"></span>
                </div>
            </div>
            <div class="product-actions">
                <div class="product-dots">...</div>
                <div></div>
                <div class="product-quantity color-grey-private">
                    <span>12</span>
                    <span class="icon bb-icon-delivered fs-15 ml-5"></span>
                </div>
            </div>
        </div>
        <div class="actions-popover hidden">
            <ul class="list-unstyled ml-15">
                <li>
                    <span class="icon-bb icon-share-product color-green fs-15 plr-5"></span> Share
                </li>
                <li ng-click="products.duplicateProduct(product.Product_id)">
                    <span class="icon-bb icon-duplicate-product color-green fs-15 plr-5"></span>Duplicate
                </li>
                <li ng-click="products.deleteProduct(product.Product_id)">
                    <span class="icon-bb icon-delete-product color-green fs-15 plr-5"></span> Delete
                </li>
            </ul>
        </div>
    </div>
    <div class="products-block actions-popover-opened">
        <div class="product-image" style="background-image: url(&quot;https://bloombees.com/h/api/assets/images/96710/products/md/img&quot;);">
            <span>
                <span class="product-label product-label-sale">sale</span>
            </span>
                <span class="product-photos" ng-if="product.Product_picturesCount > 1">
                <span class="icon-bb icon-photo-camera"></span> +<span>3</span>
            </span>
            <div class="overlay">
                <div class="overlay-edit">View & Edit</div>
                <span class="icon-bb icon-drag-n-drop icon-drag"></span>
            </div>
        </div>
        <div class="product-details">
            <h4 class="product-name product-name-initial mtb-0 lh-14">
                <a href="#">Serie Costa Rica</a>
            </h4>
            <div class="product-prices">
                <div class="product-price">
                    <span>1</span> <span>€</span>
                </div>
                <div class="product-price-promo">
                    <span>2</span> <span>€</span>
                </div>
                <div class="product-custom-shipping">
                    <span class="icon-bb icon-shipping-custom fs-25"></span>
                </div>
            </div>
            <div class="product-actions">
                <div class="product-dots">...</div>
                <div></div>
                <div class="product-quantity color-grey-private">
                    <span>12</span>
                    <span class="icon bb-icon-delivered fs-15 ml-5"></span>
                </div>
            </div>
        </div>
        <div class="actions-popover">
            <ul class="list-unstyled ml-15">
                <li>
                    <span class="icon-bb icon-share-product color-green fs-15 plr-5"></span> Share
                </li>
                <li ng-click="products.duplicateProduct(product.Product_id)">
                    <span class="icon-bb icon-duplicate-product color-green fs-15 plr-5"></span>Duplicate
                </li>
                <li ng-click="products.deleteProduct(product.Product_id)">
                    <span class="icon-bb icon-delete-product color-green fs-15 plr-5"></span> Delete
                </li>
            </ul>
        </div>
    </div>
    <div class="products-block">
        <div class="product-image" style="background-image: url(&quot;https://bloombees.com/h/api/assets/images/96710/products/md/img&quot;);">
            <span>
                <span class="product-label product-label-private">private</span>
            </span>
                <span class="product-photos" ng-if="product.Product_picturesCount > 1">
                <span class="icon-bb icon-photo-camera"></span> +<span>3</span>
            </span>
            <div class="overlay">
                <div class="overlay-edit">View & Edit</div>
                <span class="icon-bb icon-drag-n-drop icon-drag"></span>
            </div>
        </div>
        <div class="product-details">
            <h4 class="product-name product-name-initial mtb-0 lh-14">
                <a href="#">Serie Costa Rica</a>
            </h4>
            <div class="product-prices">
                <div class="product-price">
                    <span>1</span> <span>€</span>
                </div>
                <div class="product-price-promo invisible">
                    <span></span> <span>€</span>
                </div>
                <div class="product-custom-shipping">
                    <span class="icon-bb icon-shipping-custom fs-25"></span>
                </div>
            </div>
            <div class="product-actions">
                <div class="product-dots">...</div>
                <div></div>
                <div class="product-quantity color-grey-private">
                    <span>12</span>
                    <span class="icon bb-icon-delivered fs-15 ml-5"></span>
                </div>
            </div>
        </div>
        <div class="actions-popover hidden">
            <ul class="list-unstyled ml-15">
                <li>
                    <span class="icon-bb icon-share-product color-green fs-15 plr-5"></span> Share
                </li>
                <li ng-click="products.duplicateProduct(product.Product_id)">
                    <span class="icon-bb icon-duplicate-product color-green fs-15 plr-5"></span>Duplicate
                </li>
                <li ng-click="products.deleteProduct(product.Product_id)">
                    <span class="icon-bb icon-delete-product color-green fs-15 plr-5"></span> Delete
                </li>
            </ul>
        </div>
    </div>
</div>
{% endexample %}