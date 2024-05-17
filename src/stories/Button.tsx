import React, { useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
    type?: string;
    kind?: string;
    disabled?: boolean;
    text?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    iconLeft?: string;
    iconRight?: string;
    href?: string;
    onClick?: () => void;
    size?: string;
    platform?: string;
}

const Button = ({...props}: Props) => {
    const button = (type: string = "primary", kind: string = "primary", backgroundColor: string = "#113B73", text: string = "Button", color: string = "white", border: string = "", borderRadius: string = "", iconLeft: string | undefined, iconRight:string | undefined, disabled: boolean = false) => {
        switch(type){
            case "primary":
                if(kind == "primary"){  
                    return (<div className='w-full'>
                            <style jsx>{`
                                .btn {
                                    background-color: ${props.backgroundColor};
                                    color: ${props.color}
                                }
                            `}
                            </style>
                        <button disabled={disabled} style={{border, borderRadius}} className={`btn w-full bg-[#113B73] rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0A2C5A]  disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#0A2C5A]`}>
                       {iconLeft && <span className='mr-4'>&#8681;</span>}{text}{iconRight && <span className='ml-4'>&#8681;</span>}
                    </button></div>)
                }else if(kind == "secondary"){
                    return (<div>
                        
                         <style jsx>{`
                                .btn {
                                    background-color: ${props.backgroundColor};
                                    color: ${props.color}
                                }
                            `}
                            </style>
                                <button disabled={disabled} className={`btn border-[#113B73] dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center font-medium text-[#113B73] dark:text-white hover:text-[#637381] hover:bg-[#E1E8FF] active:bg-[#ADBCF2] active:text-[#113B73] dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5`}>
                        {text}
                        </button>
                        </div>)
                }else{
                    return (
                    <div>
                        <style jsx>{`
                                .btn {
                                    background-color: ${props.backgroundColor};
                                    color: ${props.color}
                                }
                            `}
                        </style>
                        <button disabled={disabled} className="btn inline-flex items-center justify-center rounded-md border border-transparent bg-white px-7 py-3 text-center text-base font-medium text-[#113B73] shadow-1 hover:bg-[#E1E8FF] hover:text-[#637381] active:text-[#113B73] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3">
                            {text}
                        </button>

                    </div>
                    )
                }
            case "secondary": 
                if(kind == "primary"){
                    return (
                    <div>
                        <style jsx>{`
                                .btn {
                                    background-color: ${props.backgroundColor};
                                    color: ${props.color}
                                }
                            `}
                        </style>
                        <button disabled={disabled} className={`btn bg-[#FE8B4C] rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#E1580E]  disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#E1580E]`}>
                            {text}
                        </button>
                    </div>
                    )
                }else if(kind == "secondary"){
                    return (
                    <div>
                        <style jsx>{`
                                .btn {
                                    background-color: ${props.backgroundColor};
                                    color: ${props.color}
                                }
                            `}
                        </style>
                        <button disabled={disabled} className={`btn border-[#FE8B4C] dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center font-medium text-[#FE8B4C] dark:text-white hover:text-[#FE8B4C] hover:bg-[#FFF0E9] active:bg-[#FFF0E9] active:text-[#FE8B4C] dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5`}>
                        {text}
                        </button>
                    </div>
                    )
                }else{
                    return (
                        <div>
                            <style jsx>{`
                                .btn {
                                    background-color: ${props.backgroundColor};
                                    color: ${props.color}
                                }
                            `}
                            </style>
                            <button disabled={disabled} className="btn inline-flex items-center justify-center rounded-md border border-transparent bg-white px-7 py-3 text-center text-base font-medium text-[#FE8B4C] shadow-1 hover:bg-[#FFF0E9] hover:text-[#FE8B4C] active:text-[#FE8B4C] disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3">
                                {text}
                            </button>
                        </div>
                    )
                }
        }
    }

    return (        
        <div className='w-full' onClick={props.onClick}>
            {button(props.type,props.kind, props.backgroundColor, props.text, props.color, props.border, props.borderRadius, props.iconLeft, props.iconRight, props.disabled)}
        </div>
    );
};

export default Button;