---
layout: docs
title: Variables
group: common
---

## Colors

### Color variable names in the common.scss file
<hr>
	$color-green: #2ec6c6; //Links, highlights texts, main CTAs...
	$color-red: #fc4a64; //Errors
	$color-grey--dark: #3b3b3b; //Text
	$color-grey: #939393; //Text, labels...
	$color-grey--light: #afafaf; //Icons/Text
	$color-grey--lighten: #ededed; // Dividers, Image borders
	$color-grey--bgc: #f9f9fb; //Main BKG
	$color-green--dark: #002626; //Backgrounds
<hr>

{% example html %}
        <section class="test text-center">
            <div class="row mt-20 mb-20">
                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-green"></div>
                    <div class="">
                        <b>Name:</b> Green
                        <div class="color-variable">
                            <b>Variable:</b> $color-green
                        </div>
                        <div class="color-code">
                            rgb(46, 198, 198);
                            <br>
                            hex: #2ec6c6
                        </div>
                        <div class="description text-small text-light">Links, highlights texts, main CTAs...</div>
                    </div>
                </div>

                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-grey--dark"></div>
                    <div class="">
                        <b>Name:</b> Dark grey
                        <div class="color-variable">
                            <b>Variable:</b> $color-grey--dark
                        </div>
                        <div class="color-code">
                            rgb(59, 59, 59);
                            <br>
                            hex: #3b3b3b
                        </div>
                        <div class="description text-small text-light">Text</div>
                    </div>
                </div>

                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-grey"></div>
                    <div class="">
                        <b>Name:</b> Grey
                        <div class="color-variable">
                            <b>Variable:</b> $color-grey
                        </div>
                        <div class="color-code">
                            rgb(147, 147, 147);
                            <br>
                            hex: #939393
                        </div>
                        <div class="description text-small text-light">Text, labels...</div>
                    </div>
                </div>
            </div>
            <div class="row mb-20">
                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-red"></div>
                    <div class="">
                        <b>Name:</b> Red
                        <div class="color-variable">
                            <b>Variable:</b> $color-red
                        </div>
                        <div class="color-code">
                            rgb(236, 73, 101);
                            <br>
                            hex: #fc4a64
                        </div>
                        <div class="description text-small text-light">Errors</div>
                    </div>
                </div>

                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-grey--light"></div>
                    <div class="">
                        <b>Name:</b> Light grey
                        <div class="color-variable">
                            <b>Variable:</b> $color-grey--light
                        </div>
                        <div class="color-code">
                            rgb(175, 175, 175);
                            <br>
                            hex: #afafaf
                        </div>
                        <div class="description text-small text-light">Icons/Text</div>
                    </div>
                </div>

                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-grey--lighten"></div>
                    <div class="">
                        <b>Name:</b> Lighten grey
                        <div class="color-variable">
                            <b>Variable:</b> $color-grey--lighten
                        </div>
                        <div class="color-code">
                            rgb(237, 237, 237);
                            <br>
                            hex: #ededed
                        </div>
                        <div class="description text-small text-light">Dividers, Image borders</div>
                    </div>
                </div>
            </div>
            <div class="row mb-20">
                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-green--dark"></div>
                    <div class="">
                        <b>Name:</b> Dark Green
                        <div class="color-variable">
                            <b>Variable:</b> $color-green--dark
                        </div>
                        <div class="color-code">
                            rgb(0, 38, 38);
                            <br>
                            hex: #002626
                        </div>
                        <div class="description text-small text-light">Backgrounds</div>
                    </div>
                </div>
                <div class="color-example-wrap col-sm-4">
                    <div class="color-example color-grey--bgc"></div>
                    <div class="">
                        <b>Name:</b> BKG grey
                        <div class="color-variable">
                            <b>Variable:</b> $color-grey--bgc
                        </div>
                        <div class="color-code">
                            rgb(249, 249, 251);
                            <br>
                            hex: #f9f9fb
                        </div>
                        <div class="description text-small text-light">Main BKG</div>
                    </div>
                </div>
            </div>
        </section>
{% endexample %}