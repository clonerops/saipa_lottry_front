import { FC } from "react";

interface IProps {
    title: string
    defaultValue?: string
    disable?: boolean
    required?: boolean
    name?: string | undefined 
    valueData?: string | number
    onChangeData?: React.ChangeEventHandler<HTMLInputElement> | undefined

}

const DateAndLabel: FC<IProps> = ({ title, defaultValue, disable, required, name, valueData,  onChangeData}) => {
    return (
        <section className="tw-flex tw-items-center tw-p-1 tw-py-2">
            <label className="tw-inline-block tw-w-[150px] tw-pl-2 tw-text-left tw-font-Vazir tw-text-md">
               {title}: {required && <span className="tw-text-red-600">*</span>}
            </label>
            <input
                type="date"
                value={valueData}
                name={name}
                placeholder='sada'
                onChange={onChangeData}
                disabled={disable}
                defaultValue={defaultValue}
                className="tw-bg-transparent tw-m-0 tw-inline-block tw-w-[14rem] tw-rounded-md tw-border tw-border-gray-400 tw-p-2 tw-font-Vazir tw-text-lg tw-outline-none"
            />
        </section>
    );
};

export default DateAndLabel;
