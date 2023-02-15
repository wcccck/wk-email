import {shallowMount} from "@vue/test-utils";
import Button from "./button";

describe('Button',()=>{
  const btn = shallowMount(Button)
  console.log(btn.classes())
  console.log(123)
})