import React, { FC, ChangeEvent } from 'react';
import { TextComponent } from './text.component';

export type StandardInputProps = {
    placeHolder: string;
    name: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    type: string;
    hasLabel: boolean;
    labelText: string | null;
    hasError: boolean;
    errorText: string | null;
    hasIcon: boolean;
    icon: any;
};

export const PrimaryInput: FC<StandardInputProps> = (props) => {
    return (
        <>
            {props.hasLabel && typeof props.labelText === 'string' && (
                <label>{props.labelText}</label>
            )}
            {props.hasError && typeof props.errorText === 'string' && (
                <TextComponent fontType={'p'} text={props.errorText} />
            )}
            {props.hasIcon ? (
                <div className={'input-and-icon-wrapper'}>
                    <input
                        type={props.type}
                        value={props.value}
                        onChange={props.handleChange}
                        name={props.name}
                        placeholder={props.placeHolder}
                    />
                    <div className={'input-icon'}>{props.icon}</div>
                </div>
            ) : (
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.handleChange}
                    name={props.name}
                    placeholder={props.placeHolder}
                />
            )}
        </>
    );
};

export type SelectInputProps = {
    options: Array<Object>;
    name: string;
    handleChange: (e: ChangeEvent) => void;
    value: string | number;
    hasLabel: boolean;
    labelText: string | null;
    hasError: boolean;
    errorText: string | null;
    placeHolder: string;
    hasIcon: boolean;
    icon: any;
};

export const SelectInput: FC<SelectInputProps> = (props) => {
    return (
        <div>
            {props.hasLabel && typeof props.labelText === 'string' && (
                <label>{props.labelText}</label>
            )}
            {props.hasError && typeof props.errorText === 'string' && (
                <TextComponent fontType={'p'} text={props.errorText} />
            )}
            {props.hasIcon ? (
                <div className={'input-and-icon-wrapper'}>
                    <select
                        placeholder={props.placeHolder}
                        name={props.name}
                        value={props.value}
                        onChange={props.handleChange}
                    >
                        {props.options.map((value: any, index: number) => {
                            return (
                                <option key={index} value={value.optionValue}>
                                    {value.text}
                                </option>
                            );
                        })}
                    </select>
                    <div className={'input-icon'}>{props.icon}</div>
                </div>
            ) : (
                <select
                    placeholder={props.placeHolder}
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                >
                    {props.options.map((value: any, index: number) => {
                        return (
                            <option key={index} value={value.optionValue}>
                                {value.text}
                            </option>
                        );
                    })}
                </select>
            )}
        </div>
    );
};
