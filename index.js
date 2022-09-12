<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateUrl='indie.xml' b:templateVersion='1.3.3' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <script src='securepubads.g.doubleclick.net/tag/js/gpt.js'/>
   
   <script src='googletagservices.com/tag/js/gpt.js'/>
    <script src='pagead2.googlesyndication.com/pagead/show_ads.js'/>
    <!-- Ezoic Code -->
	<script>var ezoicId = 377690;</script>
	<script src='//go.ezoic.net/ezoic/ezoic.js' type='text/javascript'/>
<!-- Ezoic Code -->
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
    <title><data:view.title.escaped/></title>
    <b:include data='blog' name='all-head-content'/>


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Entry point is needed so that the module could be required.
// The module dir path will be needed to copy resources from it.

const path = require('path');

module.exports = {
    dirname: path.join(__dirname, 'template_src/www')
};
