import React,{Component} from 'react'
import Particles from 'react-particles-js';


class ParticleSettings extends Component{
    render(){
        return(
            <div>
                <Particles
                height='1000px' width='100vw'
                id='tsparticles'
                options={
                    {
                        background:{
                            color:{
                                value:"blue"
                            }
                        }
                    }
                }
                />
            </div>
        )
    }
}
export default ParticleSettings;