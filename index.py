import spacy;
sp = spacy.load('en_core_web_sm')
# record input => text 

sen = sp(u"I wanted to build a virtual tree, you know... aple")
#python for loop define word type
for word in sen:
    print (f'{word.text:{12}} {word.pos_:{10}} {word.tag_:{8}} {spacy.explain(word.tag_)}')
    #if input = word.text[i]
    #print type = word.text[i].pos_
    #if type = noun, play music1/ send osc 'n'
    #if type = verb, play music2/ send osc 'v'
    

