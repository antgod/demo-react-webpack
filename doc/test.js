const fs = require('fs')

const a = fs.readFileSync('2.漫谈React.md', 'utf8')

const test = `<pre class="代码无行号 prettyprint"><code><span class="lit">@immutableRenderDecorator</span><span class="pln">
</span><span class="lit">@CSSModules</span><span class="pun">(</span><span class="pln">styles</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> allowMultiple</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">})</span><span class="pln">
</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Tabs</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">static</span><span class="pln"> propTypes </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    children</span><span class="pun">:</span><span class="pln"> </span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">oneOfType</span><span class="pun">([</span><span class="pln">
      </span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">arrayOf</span><span class="pun">(</span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">node</span><span class="pun">),</span><span class="pln">
      </span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">node</span><span class="pun">,</span><span class="pln">
    </span><span class="pun">]),</span><span class="pln">
    defaultActiveIndex</span><span class="pun">:</span><span class="pln"> </span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">number</span><span class="pun">,</span><span class="pln">
    activeIndex</span><span class="pun">:</span><span class="pln"> </span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">number</span><span class="pun">,</span><span class="pln">
    onChange</span><span class="pun">:</span><span class="pln"> </span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">func</span><span class="pun">,</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">

  </span><span class="kwd">static</span><span class="pln"> defaultProps </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    onChange</span><span class="pun">:</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{},</span><span class="pln">
  </span><span class="pun">};</span><span class="pln">

  constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">

    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleTabClick </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleTabClick</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">immChildren </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Seq</span><span class="pun">(</span><span class="pln">currProps</span><span class="pun">.</span><span class="pln">children</span><span class="pun">);</span><span class="pln">

    </span><span class="kwd">const</span><span class="pln"> currProps </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">;</span><span class="pln">

    let activeIndex</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="str">'activeIndex'</span><span class="pln"> </span><span class="kwd">in</span><span class="pln"> currProps</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      activeIndex </span><span class="pun">=</span><span class="pln"> currProps</span><span class="pun">.</span><span class="pln">activeIndex</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="str">'defaultActiveIndex'</span><span class="pln"> </span><span class="kwd">in</span><span class="pln"> currProps</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      activeIndex </span><span class="pun">=</span><span class="pln"> currProps</span><span class="pun">.</span><span class="pln">defaultActiveIndex</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      activeIndex</span><span class="pun">,</span><span class="pln">
      prevIndex</span><span class="pun">:</span><span class="pln"> activeIndex</span><span class="pun">,</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  componentWillReceiveProps</span><span class="pun">(</span><span class="pln">nextProps</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="str">'activeIndex'</span><span class="pln"> </span><span class="kwd">in</span><span class="pln"> nextProps</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
        activeIndex</span><span class="pun">:</span><span class="pln"> nextProps</span><span class="pun">.</span><span class="pln">activeIndex</span><span class="pun">,</span><span class="pln">
      </span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  handleTabClick</span><span class="pun">(</span><span class="pln">activeIndex</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">const</span><span class="pln"> prevIndex </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">activeIndex</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">activeIndex </span><span class="pun">!==</span><span class="pln"> activeIndex </span><span class="pun">&amp;&amp;</span><span class="pln">
        </span><span class="str">'defaultActiveIndex'</span><span class="pln"> </span><span class="kwd">in</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
        activeIndex</span><span class="pun">,</span><span class="pln">
        prevIndex</span><span class="pun">,</span><span class="pln">
      </span><span class="pun">});</span><span class="pln">

      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">onChange</span><span class="pun">({</span><span class="pln"> activeIndex</span><span class="pun">,</span><span class="pln"> prevIndex </span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  renderTabNav</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="typ">TabNav</span><span class="pln">
        key</span><span class="pun">=</span><span class="str">"tabBar"</span><span class="pln">
        onTabClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleTabClick</span><span class="pun">}</span><span class="pln">
        panels</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">immChildren</span><span class="pun">}</span><span class="pln">
        activeIndex</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">activeIndex</span><span class="pun">}</span><span class="pln">
      </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  renderTabContent</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="typ">TabContent</span><span class="pln">
        key</span><span class="pun">=</span><span class="str">"tabcontent"</span><span class="pln">
        activeIndex</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">activeIndex</span><span class="pun">}</span><span class="pln">
        panels</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">immChildren</span><span class="pun">}</span><span class="pln">
      </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">const</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> className </span><span class="pun">}</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">const</span><span class="pln"> classes </span><span class="pun">=</span><span class="pln"> classnames</span><span class="pun">(</span><span class="pln">className</span><span class="pun">,</span><span class="pln"> </span><span class="str">'ui-tabs'</span><span class="pun">);</span><span class="pln">

    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="pln">div className</span><span class="pun">={</span><span class="pln">classes</span><span class="pun">}&gt;</span><span class="pln">
        </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">renderTabNav</span><span class="pun">()}</span><span class="pln">
        </span><span class="pun">{</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">renderTabContent</span><span class="pun">()}</span><span class="pln">
      </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span></code></pre>`


const b = a.replace(/pre[\s\S]*\>[\s\S]*\<\/pre/, function(word){
  console.log(word)
  return word.replace(/\n{2, }/g, '\n')
})

console.log(b)
